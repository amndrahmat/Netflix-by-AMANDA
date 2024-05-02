import React from "react";
import { footer1 } from "../../Data/footer";
import { footer2 } from "../../Data/footer";
import { footer3 } from "../../Data/footer";
import { footer4 } from "../../Data/footer";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-4 justify-items-center py-6 w-3/5 items-center mx-auto">
        <div style={{ width: "300px"}}>
          <p className="text-neutral-200 w- font-sans text-md font-normal tracking-normal no-underline pb-4">
          Questions? Call 007-803-321-2130
          </p>
          {footer1.map((item) => {
            return (
              <div key={item.id} className="h-12">
                <p className="text-neutral-200 font-sans text-sm font-normal tracking-normal no-underline pb-4">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          {footer2.map((item) => {
            return (
              <div key={item.id} className="h-12">
                <p className="text-neutral-200 font-sans text-sm font-normal tracking-normal no-underline pb-4">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          {footer3.map((item) => {
            return (
              <div key={item.id} className="h-12">
                <p className="text-neutral-200 font-sans text-sm font-normal tracking-normal no-underline pb-4">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          {footer4.map((item) => {
            return (
              <div key={item.id} className="h-12">
                <p className="text-neutral-200 font-sans text-sm font-normal tracking-normal no-underline pb-4">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
