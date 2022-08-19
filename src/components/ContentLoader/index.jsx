import ContentLoader from "react-content-loader"

export function MyLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={96}
      // viewBox="0 0 400 160"
      backgroundColor="#d6d6d6"
      foregroundColor="#adadad"
      {...props}
    >
      <rect x="0" y="24px" rx="0" ry="0" width="100%" height="72px" />
    </ContentLoader >
  )
}