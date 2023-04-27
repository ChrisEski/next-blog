import React from 'react';

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            eveniet repellat totam eum laboriosam! Autem, debitis. Voluptatum
            deleniti necessitatibus fugit!
          </p>
          <p>©️ Blog of the Future All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Diam sollicitudin tempor</p>
          <p className="my-5">Risus quis varius</p>
          <p>Id neque aliquam</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Mattis rhoncus urna neque viverra</p>
          <p>
            <a href="tel:(333)425-5821">(333)425-5821</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
