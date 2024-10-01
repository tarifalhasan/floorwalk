"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const VisualMerchandisingAudit = () => {
  const [activeTab, setActiveTab] = useState(101);
  const TABS = [
    {
      name: "Promotion Audit",
      id: 101,
    },
    {
      name: "How V.M.Works",
      id: 102,
    },
    {
      name: "In-Store V.M",
      id: 103,
    },
  ];
  return (
    <div className="py-10 xl:py-20">
      <div className="space-y-3 max-w-[850px] container">
        <div>
          <h1 className="text-center max-w-[868px] mx-auto text-[2rem] xl:text-[2.625rem] leading-[110%] font-bold text-skin-primary-900">
            Visual Merchandising Audit
          </h1>
        </div>
        <div>
          <Image
            src={"/images/Visual Merchandising Audit.png"}
            alt="Visual Merchandising Audit"
            quality={80}
            width={850}
            className="rounded-[5px] object-cover ] block mx-auto  w-full h-[376px]"
            height={376}
          />
        </div>
        <div className="space-y-4 py-8">
          <p className="text-lg font-lato font-normal text-skin-neutral-600 leading-[140%] text-center">
            Visual merchandising audits or retail audits are often found in the
            retail industry as one of the strategies performed by a business
            company in order to strive for success. They provide regular
            check-ups on retailers to make sure that they are complying with the
            agreements you have made. rand reputation.
          </p>
          <p className="text-lg font-lato font-normal text-skin-neutral-600 leading-[140%] text-center">
            Visual merchandising audits have two basic categories, including
            shelf audits and seasonal audits. Shelf audits aim at ensuring the
            pricing compliance by retailers while seasonal audits to make sure
            that items in the promotion are priced and displayed correctly
            according to the company’s procedure
          </p>
        </div>
        <div className="space-y-2 pt-5">
          <div>
            <h2 className="text-center  mx-auto text-[1.9rem] xl:text-[2.1rem] leading-[110%] font-bold text-skin-primary-900">
              Important Aspects In Performing Shelf Audits
            </h2>
          </div>
          <p className="text-lg font-lato font-normal text-skin-neutral-600 leading-[140%] text-center">
            Visual merchandising audits are done by the company’s field
            representatives. The field representative will perform both shelf
            audits and seasonal audits. When performing shelf audits, here are
            important things that a field representative needs to pay attention
            to:
          </p>
          <Accordion
            className="pt-8"
            defaultValue="item-3"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>In-Store Location</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shelf Position</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Facings</AccordionTrigger>
              <AccordionContent>
                a field representative checks if there are open spaces on the
                shelf where your products located. If there are, find out
                whether the products are out of stocks or they have not been
                restocked by the retailer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="pt-20 space-y-6">
            <div className="flex justify-center items-center flex-wrap gap-5">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "inline-flex items-center border-b-[3px] font-medium font-lato gap-3 px-4 py-3 rounded",
                    activeTab == tab.id
                      ? "text-skin-primary   border-skin-primary"
                      : "text-skin-neutral-400 border-transparent bg-skin-base-white"
                  )}
                >
                  <span className="">{tab.name}</span>
                </button>
              ))}
            </div>
            <Accordion defaultValue="item-3" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>In-Store Location</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Shelf Position</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Facings</AccordionTrigger>
                <AccordionContent>
                  a field representative checks if there are open spaces on the
                  shelf where your products located. If there are, find out
                  whether the products are out of stocks or they have not been
                  restocked by the retailer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualMerchandisingAudit;
