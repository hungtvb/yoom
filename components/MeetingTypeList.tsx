"use client"

import React, { useState } from 'react'
import MeetingTypeItem from './MeetingTypeItem'
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from './ui/use-toast';

const MeetingTypeList = () => {

    const [meetingState, setMeetingState] = useState<'isJoiningMeeting' | 'isScheduleMeeting' | 'isInstantMeeting' | undefined>();
    const route = useRouter();
    const { user } = useUser();
    const client = useStreamVideoClient();
    
    const [values, setValues] = useState({
      dateTime: new Date(),
      description: '',
      link: ''
    })

    const [callDatails, setCallDatails] = useState<Call>();
    const {toast} = useToast();
    
    const handleModalClick = async () => {

      if(!values.dateTime) {
        toast({title: "Please selecte the meeting time"});
        return;
      }

      if(!user || !client) return;

      try {
        const id = crypto.randomUUID();
        const call = client.call('default', id);
        if(!call) throw new Error("Failed to create the call");
        const startAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
        const description = values.description || 'Instant meeting';

        await call.getOrCreate({
          data: {
            starts_at: startAt,
            custom: {
              description
            }
          }
        })

        setCallDatails(call);

        if(!values.description) {
          route.push(`/meeting/${call.id}`);
        }

        toast({title: "Meeting created"});
      } catch (error) {
        console.log(error);
        toast({title: "Fail to create the meeting"})
      }
    }

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <MeetingTypeItem color='bg-orange-1' title="New Meeting" description="Start new instant meeting" handleClick={() => setMeetingState('isInstantMeeting')} img='/icons/add-meeting.svg'/>
        <MeetingTypeItem color='bg-blue-1' title="Join Meeting" description="Join a via invation link" handleClick={() => setMeetingState('isJoiningMeeting')} img='/icons/join-meeting.svg'/>
        <MeetingTypeItem color='bg-purple-1' title="Schedule Meeting" description="Plan your meeting" handleClick={() => setMeetingState('isScheduleMeeting')} img='/icons/schedule.svg'/>
        <MeetingTypeItem color='bg-yellow-1' title="View Recordings" description="Check out your recordings" handleClick={() => route.push("/recordings")} img='/icons/recordings.svg'/>
        
        <MeetingModal
          isOpen={meetingState === 'isInstantMeeting'}
          onClose={() => setMeetingState(undefined)}
          title='Start an Instant meeting'
          className='text-center'
          buttonText='Start meeting'
          handleClick={handleModalClick}
        />
    </section>
  )
}

export default MeetingTypeList