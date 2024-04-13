import HeroBanner from "@/components/HeroBanner";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useEffect, useState } from "react";

const HomePage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <HeroBanner/>
      <MeetingTypeList/>
    </section>
  )
}

export default HomePage