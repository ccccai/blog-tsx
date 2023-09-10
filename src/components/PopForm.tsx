/*
 * @Author: caishiyin
 * @Date: 2020-12-09 15:15:06
 * @LastEditTime: 2023-09-11 01:18:57
 * @LastEditors: caishiyin
 * @Description:
 * @FilePath: /blog-tsx/src/components/PopForm.tsx
 */
import { useState } from 'react'
import { message, Button, SelectProps, Input, Popconfirm, Form, DatePicker, Upload, Select } from 'antd'
import ImgCrop from 'antd-img-crop'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile } from 'antd/es/upload/interface'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result as string))
    reader.readAsDataURL(img)
}

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
}

const filterOption: any = (input: string, option: { label: string; value: string }) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

const uploadButton: any = (loading: boolean) => (
    <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
)

interface IPopFormProps {
    data: any
    openPopcon: boolean
    tagList: SelectProps['options']
    categoryList: SelectProps['options']
    onConfirm: Function
    handleOpen: Function
}
const PopForm = ({ data, openPopcon, tagList, categoryList, onConfirm, handleOpen }: IPopFormProps) => {
    const [form] = Form.useForm()
    const [author, setAuthor] = useState<string>(data.author)
    const [date, setDate] = useState<string>(data.createDate)
    const [weight, setWeight] = useState<string>(data.weight)
    const [tag, setTag] = useState<any>(data.tagIds.split(',').map((item: any) => Number(item)))
    const [category, setCategory] = useState<string>(data.categoryId)
    const [coverUrl, setCoverUrl] = useState<string>(data.cover)
    const [avatarUrl, setAvatarUrl] = useState<string>(data.authorAvatar)
    const [coverUpLoading, setCoverUpLoading] = useState(false)
    const [avatarUpLoading, setAvatarUpLoading] = useState(false)

    const handleUploadChange = (info: any, type: string) => {
        if (info.file.status === 'uploading') {
            if (type === 'avatar') {
                setAvatarUpLoading(true)
            }
            if (type === 'cover') {
                setCoverUpLoading(true)
            }
            return
        }

        if (type === 'avatar') {
            setAvatarUpLoading(false)
            setAvatarUrl('')
        }
        if (type === 'cover') {
            setCoverUrl('')
            setCoverUpLoading(false)
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj as RcFile, url => {
                if (type === 'avatar') {
                    setAvatarUrl(url)
                }
                if (type === 'cover') {
                    setCoverUrl(url)
                }
            })
        }
    }

    return (
        <Popconfirm
            open={openPopcon}
            placement='bottomRight'
            icon=''
            title=''
            okButtonProps={{ size: 'large' }}
            onConfirm={() => {
                onConfirm({
                    author,
                    groupTimestamp: dayjs(date).valueOf(),
                    weight,
                    tagIds: tag.join(),
                    categoryId: category,
                    cover: coverUrl,
                    avatarUrl,
                })
            }}
            cancelButtonProps={{ size: 'large' }}
            onCancel={() => handleOpen(false)}
            description={
                <div className='confirm-body'>
                    <Form form={form} layout='vertical'>
                        <Form.Item label='名字'>
                            <Input showCount size='large' placeholder='请输入作者名字' value={author} maxLength={12} onChange={e => setAuthor(e.target.value)} />
                        </Form.Item>
                        <Form.Item label='创作时间'>
                            <DatePicker className='date-picker-content' size='large' value={dayjs(date)} onChange={(date, dateString) => setDate(dateString)} />
                        </Form.Item>
                        <Form.Item label='权重'>
                            <Input size='large' placeholder='请输入排序权重1~9999' type='number' value={weight} onChange={e => setWeight(e.target.value)} />
                        </Form.Item>
                        <Form.Item label='标签'>
                            <Select
                                showSearch
                                size='large'
                                placeholder='请选择文章标签，不超过四个'
                                mode='multiple'
                                optionFilterProp='children'
                                filterOption={filterOption}
                                style={{ width: '100%' }}
                                value={tag}
                                options={tagList}
                                onChange={value => {
                                    console.log(8888, value)
                                    setTag(value)
                                }}
                            />
                        </Form.Item>
                        <Form.Item label='分类'>
                            <Select
                                showSearch
                                size='large'
                                placeholder='请选择文章分类'
                                style={{ width: '100%' }}
                                optionFilterProp='children'
                                filterOption={filterOption}
                                options={categoryList}
                                value={category}
                                onChange={value => setCategory(value)}
                            />
                        </Form.Item>
                        <div>
                            <Form.Item className='img-upload' label='封面'>
                                <Upload
                                    maxCount={1}
                                    listType='picture-card'
                                    className='avatar-uploader'
                                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                    beforeUpload={beforeUpload}
                                    onChange={(info: UploadChangeParam<UploadFile>) => handleUploadChange(info, 'cover')}
                                >
                                    {coverUrl ? <img src={coverUrl} alt='avatar' style={{ width: '100%' }} /> : coverUpLoading ? '' : uploadButton(coverUpLoading)}
                                </Upload>
                            </Form.Item>
                            <Form.Item className='img-upload' label='头像'>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        maxCount={1}
                                        listType='picture-card'
                                        className='avatar-uploader'
                                        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                        beforeUpload={beforeUpload}
                                        onChange={(info: UploadChangeParam<UploadFile>) => handleUploadChange(info, 'avatar')}
                                    >
                                        {avatarUrl ? <img src={avatarUrl} alt='avatar' style={{ width: '100%' }} /> : avatarUpLoading ? '' : uploadButton(avatarUpLoading)}
                                    </Upload>
                                </ImgCrop>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            }
        >
            <Button className='submit-btn' onClick={() => handleOpen(true)} type='primary' size='large'>
                保存并更新
            </Button>
        </Popconfirm>
    )
}

export default PopForm
