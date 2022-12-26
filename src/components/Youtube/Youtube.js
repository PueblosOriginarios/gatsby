import React from "react";
import "./Youtube.scss";

function Youtube({ titulo, videoUrl }) {
  const url = videoUrl?.replace("watch?v=", "embed/");
  let code = url?.substring(url.lastIndexOf("/") + 1, url.length);
  const codeIndex = code?.indexOf("?");

  if (codeIndex !== -1 && code !== undefined) {
    code = code.substring(0, code.indexOf("?"));
  }

  return (
    <div className='youtubeContainer'>
      <div className='empty-left'></div>
      <div className='contentVideo'>
        <h4 className='headline-small'>{titulo}</h4>

        {videoUrl !== null && videoUrl !== undefined && (
          <div className='video'>
            {url !== undefined && code !== undefined && (
              <iframe
                loading='lazy'
                type='text/html'
                srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute; width:100%;height:100%;object-fit: cover;top:0;bottom:0;max-height: 500px}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;margin:auto;text-shadow:0 0 0.5em black}</style>
              <a href=${url + "?rel=0"}>
              <img src=https://img.youtube.com/vi/${code}/hqdefault.jpg alt='Video'>
              <span>▶</span></a>`}
                src={url + "?rel=0"}
                frameBorder='0'
                allowFullScreen
                title='youtube_video'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                webkitallowfullscreen='true'
                mozallowfullscreen='true'
              ></iframe>
            )}
          </div>
        )}
      </div>
      <div class='empty-right'></div>
    </div>
  );
}

export default Youtube;
