"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
const filters = [
  {
    title: "Definitions",
    value: "definitions",
  },
  {
    title: "Use of Product",
    value: "Use of Product",
  },
  {
    title: "Service",
    value: "Service",
  },
  {
    title: "Payment",
    value: "Payment",
  },
  {
    title: "Intellectual Property",
    value: "Intellectual Property",
  },
];

const IndustriesAndClientsWeserve = () => {
  const [activeFilter, setActiveFilter] = useState("definitions");

  return (
    <div className="lg:py-10 xl:py-20 py-4 container">
      <div>
        <div className="space-y-2">
          <h1 className="text-center max-w-[868px] mx-auto text-[2.6rem] xl:text-[3.625rem] leading-[110%] font-bold text-skin-primary-900">
            <span className="text-skin-secondary-500"> Privacy</span> & Policy
          </h1>
        </div>
      </div>
      <div className="pt-10 xl:pt-20 flex flex-col lg:grid grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-10">
        <div
          style={{
            boxShadow: "4px 4px 55px 0px rgba(0, 0, 0, 0.12)",
          }}
          className="col-span-12 lg:min-h-[800px] lg:col-span-4  bg-skin-base-white rounded-[5px] p-5 flex flex-col space-y-2"
        >
          <div>
            <h3 className="text-xl font-medium uppercase text-skin-neutral-800">
              Our Clients
            </h3>
          </div>
          <div className="pt-4">
            {filters.map((item) => (
              <button
                className={cn(
                  "text-lg block text-left font-medium py-[10px]",
                  activeFilter === item.value
                    ? "text-skin-primary"
                    : "text-skin-neutral-400"
                )}
                onClick={() => setActiveFilter(item.value)}
                key={item.value}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-y-4">
          <div>
            <h4 className=" text-lg font-medium text-[#181A2A]">Definitions</h4>
          </div>
          <p className="font-lato font-normal text-skin-secondary-600">
            In these Terms and Conditions, the following words and phrases shall
            have the following meanings:
          </p>

          <div>
            <ul className="pt-2 space-y-1">
              <li>
                <p className="font-lato font-normal text-skin-secondary-600">
                  1.1. &quot;Agreement&quot; means these Terms and Conditions.
                </p>
              </li>
              <li>
                <p className="font-lato font-normal text-skin-secondary-600">
                  1.2. &quot;Customer&quot; means the individual or entity who
                  uses the SAAS product.
                </p>
              </li>
              <li>
                <p className="font-lato font-normal text-skin-secondary-600">
                  1.3. &quot;Product&quot; means the SAAS product.
                </p>
              </li>
              <li>
                <p className="font-lato font-normal text-skin-secondary-600">
                  1.4. &quot;Service&quot; means the services provided by the
                  Product.
                </p>
              </li>
              <li>
                <p className="font-lato font-normal text-skin-secondary-600">
                  1.5. &quot;Term&quot; means the period of time during which
                  the Customer has access to and uses the Product.
                </p>
              </li>
              <li>
                <p className="font-lato font-normal text-skin-secondary-600">
                  1.6. &quot;Solution&quot; means the services along with their
                  prices provided by the Product and the Company
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h4 className=" text-lg font-medium text-[#181A2A]">
                Use of Product
              </h4>
            </div>

            <div>
              <ul className="pt-2 space-y-1">
                <li>
                  <p className="font-lato font-normal text-skin-secondary-600">
                    2.1. The Customer agrees to use the Product only for lawful
                    purposes and in accordance with these Terms and Conditions.
                  </p>
                </li>
                <li>
                  2.2. The Customer agrees that they authorize and permit the
                  company to carry the services of the solutions purchased by
                  the customer.
                </li>
                <li>
                  <p className="font-lato font-normal text-skin-secondary-600">
                    2.3. The Customer shall not :
                  </p>
                  <ul className="list-disc pl-4">
                    <li>
                      <p className="font-lato font-normal text-skin-secondary-600">
                        use the Product in any way that violates any applicable
                        national, state, local, or international law or
                        regulation.
                      </p>
                    </li>
                    <li>
                      <p className="font-lato font-normal text-skin-secondary-600">
                        use the Product for the purpose of exploiting, harming,
                        or attempting to exploit or harm minors in any way by
                        exposing them to in appropriate content, asking for
                        personally identifiable information, or otherwise;
                      </p>
                    </li>
                    <li>
                      <p className="font-lato font-normal text-skin-secondary-600">
                        Use the Product to transmit, or procure the sending of,
                        any advertising or promotional material, including any
                        &quot;junk mail&quot; &quot;chain letter,&quot;
                        &quot;spam,&quot; or any other similar solicitation;
                      </p>
                    </li>
                    <li>
                      <p className="font-lato font-normal text-skin-secondary-600">
                        use the Product to impersonate or attempt to impersonate
                        the Company, a Company employee, another user, or any
                        other person or entity;
                      </p>
                    </li>
                    <li>
                      <p className="font-lato font-normal text-skin-secondary-600">
                        use any robot, spider, or other automatic devices,
                        process, or means to access the Product for any purpose,
                        including monitoring or copying any of the material on
                        the Product;
                      </p>
                    </li>
                    <li>
                      <p className="font-lato font-normal text-skin-secondary-600">
                        introduce any viruses, Trojan horses, worms, logic
                        bombs, or other material that is malicious or
                        technologically harmful;
                      </p>
                    </li>
                    <li>
                      <p className="font-lato font-normal text-skin-secondary-600">
                        attempt to gain unauthorized access to, interfere with,
                        damage, or disrupt any parts of the Product, the server
                        on which the Product is stored, or any server, computer,
                        or database connected to the Product;
                      </p>
                    </li>
                    <li>
                      <p className="font-lato font-normal text-skin-secondary-600">
                        attack the Product via a denial-of-service attack or a
                        distributed denial-of-service attack;
                      </p>
                    </li>
                    <li>
                      <p className="font-lato font-normal text-skin-secondary-600">
                        otherwise, attempt to interfere with the proper working
                        of the Product.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-lato font-normal text-skin-secondary-600">
                    2.4. The Company reserves the right to terminate the
                    Customer&apos;s access to the Product at any time, without
                    notice, if the Customer violates these Terms and Conditions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h4 className=" text-lg font-medium text-[#181A2A]">Service</h4>
            </div>

            <div>
              <ul className="pt-2 space-y-1">
                <li>
                  <p className="font-lato font-normal text-skin-secondary-600">
                    3.1. The Company agrees to provide the Service to the
                    Customer for the solutions purchased on this product.
                  </p>
                </li>
                <li className="font-lato font-normal text-skin-secondary-600">
                  3.2. The Company shall use reasonable efforts to ensure that
                  the Product and Service are available to the Customer for the
                  solutions purchased on this product.
                </li>

                <li>
                  <p className="font-lato font-normal text-skin-secondary-600">
                    3.3. The Company shall use reasonable efforts to respond to
                    support requests submitted by the Customer in a timely
                    manner.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesAndClientsWeserve;
