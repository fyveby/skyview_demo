
function Videos () {
    return (
    <div className="h-100 p-5 bg-body-tertiary border rounded-3">
      
        <div className="row">
            <div className="col-xl-6">
                <video controls height={250} width={250}>
                    <source src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4" type="video/mp4"></source>
                </video>
                </div>
            <div className="col-xl-6">
                <video controls height={250} width={250}>
                    <source src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4" type="video/mp4"></source>
                </video>
                </div>
        </div>
        <div className="row">
            <div className="col-xl-6">
                <video controls height={250} width={250}>
                    <source src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className="col-xl-6">
                <video controls height={250} width={250}>
                    <source src="https://nbaa-demo-video-storage.s3.amazonaws.com/mixkit-airplane-taking-off-in-the-sun-27988-medium.mp4" type="video/mp4"></source>
                </video>
            </div>
        </div>
      </div>
    
    )
} export default Videos;