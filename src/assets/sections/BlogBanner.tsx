import React, { Component } from "react";
//styles
import "../styles/sections/style_BlogBanner.scss";
//data
import blogdata from "../data/blog-data.json";
//assets
import Blog1 from "../images/photos/blog_debugger.png";
import Blog2 from "../images/photos/blog_finalise.png";
import Blog3 from "../images/photos/blog_cahier.png";
import { ArrowCircleSmall } from "../components/ArrowCircleSmall";

const goToLink = () => {};

export const BlogBanner = () => {
  return (
    <section className="col-12 blog-banner">
      <div className="row">
        <div className="col-12 blog-banner__head">
          <div className="sub-title-area">
            <h2>Le blog d'ACSEO</h2>
            <div className="sub-title-area__line blog-bar"></div>
          </div>

          <p className="title-sub">Lorem Ipsum</p>
        </div>

        <div className="col-12 blog-banner__content">
          <div className="row justify-content-center">
            {blogdata.map((_artb, index) => (
              <article
                key={`blog-${index}`}
                className="col-lg-3 col-md-12 col-sm-12 col-12"
              >
                <div className="blog-banner__content__card">
                  <div className="blog-banner__content__card__img">
                    <img
                      src={
                        _artb.image === "blog-1"
                          ? Blog1
                          : _artb.image === "blog-2"
                          ? Blog2
                          : Blog3
                      }
                    />
                  </div>
                  <div className="blog-banner__content__card__text">
                    <h3>{_artb.title}</h3>
                    <p className="content-paragraph">{_artb.text}</p>
                    <div className="blog-banner__content__card__text__dateNlink">
                      <p>{_artb.date}</p>
                      <ArrowCircleSmall
                        arrowClick={goToLink}
                        isActive={false}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="col-12 pt-5 orange-link">
            <a className="orange-link__big">Voir tous les articles</a>
          </div>
        </div>
      </div>
    </section>
  );
};
