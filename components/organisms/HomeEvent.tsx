import React from "react";

import { events } from "../../data/reunion";

export const HomeEvent: React.FC = () => {
  return (
    <section className="bg-gray-50 overflow-hidden px-4 py-6 pb-4 space-y-4 rounded-xl">
      <h2 className="text-lg sm:text-xl font-semibold">Kegiatan Kita ✌️</h2>
      <div className="grid lg:grid-cols-2 lg:gap-4 sm:gap-1 sm:grid-cols-1 sm:py-1">
        {events.map((row, idx) => {
          return (
            <a href="#" key={idx}>
              <div
                className="card card-compact w-78 bg-base-100 shadow-xl min-[320px]:mt-4 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <figure>
                  <img src={row.image} alt={row.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{row.title}</h2>
                  <p>{row.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
