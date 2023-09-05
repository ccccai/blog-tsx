import '../styles/banner.less'

interface InfoProps {
  title: string,
  bannerUrl: string
}

const BannerBox = (props: InfoProps) => {
  return (
    <>
      <div className="banner-content">
        <div className="banner-img" style={{ backgroundImage: `url(${props.bannerUrl})` }} title="Tech" />
        {/* <img alt='背景' title='背景' src={props.bannerUrl} /> */}
        <div className="banner-title">
          <span>{props.title}</span>
        </div>
      </div>
    </>
  )
}

export default BannerBox