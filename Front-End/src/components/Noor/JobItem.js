import React from 'react';


const JobItem = ({job}) => {
    if (!job){
        return <div align='center' className="mt-sm-5">Seaaarch Pleaaase </div>
    }

    //console.log(video.id.videoId)
    
    return (
       
        <div className='mt-sm-4'>
            
            <div>
                <h5>{job.results.jobtitle}</h5>
                <h6 className='text-muted'>Published at:  {job.results.company}</h6>
                <h6>{job.results.snippet}</h6>
               
            </div>
        </div>
       
    )
}

export default JobItem;