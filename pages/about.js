import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div class=" pt-[150px] mx-10">
      <div class="container mx-auto p-10 w-[100%] md:w-[700px] shadow-2xl bg-white">
        <h1 class="text-2xl font-medium mb-4 text-center md:text-left">
          About Elwersa
        </h1>
        <p class="mb-4 text-center md:text-left">
          Welcome to Elwersa, your go-to destination for all things cinema. We
          are dedicated to bringing you the latest and greatest in the world of
          movies. From the latest blockbuster releases to indie films you won't
          find anywhere else, we have something for everyone.
        </p>
        <p class="mb-4 text-center md:text-left">
          Our team of film enthusiasts scours the globe for the best movies, and
          we strive to provide you with in-depth reviews, trailers, and other
          information to help you make informed decisions about what to watch.
          We also provide showtimes and ticketing information for theaters near
          you.
        </p>
        <p class="mb-4 text-center md:text-left">
          In addition to the latest movie news, we also offer a wide variety of
          features, such as interviews with directors, actors, and other
          industry professionals, as well as retrospective pieces on classic
          films.
        </p>
        <p class="mb-4 text-center md:text-left">
          Thank you for visiting Elwersa, and we hope you enjoy exploring the
          world of cinema with us!
        </p>
      </div>
    </div>
  );
};

export default about;
