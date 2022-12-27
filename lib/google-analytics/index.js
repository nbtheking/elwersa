import React from "react";

export const pageview = (url) => {
  window.gtag("config", process.env.GOOGLE_ANALYTICS_ID, {
    path_url: url,
  });
};
