"use client"

import React, { useState } from 'react'
import MeetingTypeItem from './MeetingTypeItem'
import { useRouter } from 'next/navigation';

const MeetingTypeList = () => {

    const [meetingState, setMeetingState] = useState<'isJoiningMeeting' | 'isScheduleMeeting' | 'isInstantMeeting' | undefined>();
    const route = useRouter();

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <MeetingTypeItem color='orange' title="New Meeting" description="Start new instant meeting" handleClick={() => setMeetingState('isInstantMeeting')} img='/icons/add-meeting.svg'/>
        <MeetingTypeItem color='blue' title="Join Meeting" description="Join a via invation link" handleClick={() => setMeetingState('isJoiningMeeting')} img='/icons/join-meeting.svg'/>
        <MeetingTypeItem color='purple' title="Schedule Meeting" description="Plan your meeting" handleClick={() => setMeetingState('isScheduleMeeting')} img='/icons/schedule.svg'/>
        <MeetingTypeItem color='yellow' title="View Recordings" description="Check out your recordings" handleClick={() => route.push("/recordings")} img='/icons/recordings.svg'/>
        
    </section>
  )
}

export default MeetingTypeList