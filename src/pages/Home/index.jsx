import React from "react";
import "./index.css";
import Header from "../../components/Header/index";
import { Link } from "react-router-dom";
import Events from "../../components/UI/eventsList";
import TrainingAndPlacement from "../../components/UI/trainingPlacement";
import List from "../../components/UI/lists";
import StudentTalkList from "../../components/UI/studentsTalk";
import ForumList from "../../components/UI/formsList";
import MoviesArea from "../../components/UI/moviesArea";
import GroceryStore from "../../components/UI/Cards/GroceryStore";
import NewsVideo from "../../components/UI/Cards/News";

import data from "../../data";
export default function index() {
  return (
    <>
      <Header></Header>
      {/*============================= Categories ==================== */}
      <section className="categories_area_top pt-5">
        <article className="categories_top_section">
          <div className="grid md:grid-cols-3">
            <div>
              <div className="categories_heading bg-black px-2 text-white border-x-[1px] flex justify-between items-center">
                <h3>Recent Ads</h3>
                <Link
                  to="#"
                  className="flex justify-center items-center space-x-3 py-1"
                >
                  <h3>View All</h3>{" "}
                  <span>
                    <img
                      src={require("../../assets/imgs/icons/link.svg").default}
                      className="w-5 h-6"
                    ></img>
                  </span>
                </Link>
              </div>
              {data.map((sect, index) => (
                <div className="categories_content" key={index}>
                  {sect.ads && (
                    <ul className="list-disc px-5 py-3">
                      {sect.ads.map((ad) => (
                        <List key={ad.id} name={ad.title}></List>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div>
              <div className="categories_heading bg-black px-2 text-white border-x-[1px] flex justify-between items-center">
                <h3>NRIS Talk</h3>
                <Link
                  to="#"
                  className="flex justify-center items-center space-x-3 py-1"
                >
                  <h3>View All</h3>{" "}
                  <span>
                    <img
                      src={require("../../assets/imgs/icons/talk.svg").default}
                      className="w-5 h-6"
                    ></img>
                  </span>
                </Link>
              </div>

              {data.map((sect2, index) => (
                <div className="categories_content" key={index}>
                  {sect2.nris_talk && (
                    <ul className="list-disc px-5 py-3">
                      {sect2.nris_talk.map((talk) => (
                        <List key={talk.id} name={talk.title}></List>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div>
              <div className="categories_heading bg-black px-2 text-white border-x-[1px] flex justify-between items-center">
                <h3>National Events</h3>
                <Link
                  to="#"
                  className="flex justify-center items-center space-x-3 py-1"
                >
                  <h3>View All</h3>{" "}
                  <span>
                    <img
                      src={require("../../assets/imgs/icons/event.svg").default}
                      className="w-5 h-6"
                    ></img>
                  </span>
                </Link>
              </div>
              <div className="categories_content">
                <div className="events_type">
                  <Events></Events>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="categories_area_bottom ">
        <article className="categories_top_section">
          <div className="grid md:grid-cols-3">
            <div>
              <div className="categories_heading bg-black px-2 text-white border-x-[1px] flex justify-between items-center">
                <h3>Training & Placement</h3>
                <Link
                  to="#"
                  className="flex justify-center items-center space-x-3 py-1"
                >
                  <h3>View All</h3>{" "}
                  <span>
                    <img
                      src={
                        require("../../assets/imgs/icons/training.svg").default
                      }
                      className="w-5 h-6"
                    ></img>
                  </span>
                </Link>
              </div>
              <div className="categories_content">
                <div className="events_type">
                  <TrainingAndPlacement></TrainingAndPlacement>
                </div>
              </div>
            </div>

            <div>
              <div className="categories_heading bg-black px-2 text-white border-x-[1px] flex justify-between items-center">
                <h3>Student's Talk</h3>
                <Link
                  to="#"
                  className="flex justify-center items-center space-x-3 py-1"
                >
                  <h3>View All</h3>{" "}
                  <span>
                    <img
                      src={
                        require("../../assets/imgs/icons/student.svg").default
                      }
                      className="w-5 h-6"
                    ></img>
                  </span>
                </Link>
              </div>
              <div className="categories_content">
                <div className="events_type">
                  <StudentTalkList></StudentTalkList>
                </div>
              </div>
            </div>
            <div>
              <div className="categories_heading bg-black px-2 text-white border-x-[1px] flex justify-between items-center">
                <h3>Forum</h3>
                <Link
                  to="#"
                  className="flex justify-center items-center space-x-3 py-1"
                >
                  <h3>View All</h3>{" "}
                  <span>
                    <img
                      src={require("../../assets/imgs/icons/event.svg").default}
                      className="w-5 h-6"
                    ></img>
                  </span>
                </Link>
              </div>
              <div className="categories_content">
                <div className="events_type">
                  <ForumList></ForumList>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/*===================================MOVIE REVIEWS=================================== */}

      <section className="categories_area_movies ">
        <article className="categories_top_section">
          <div className="grid md:grid-cols-1">
            <div>
              <div className="categories_heading bg-black px-2 text-white border-x-[1px] flex justify-between items-center">
                <h3>Movie Reviews</h3>
                <Link
                  to="#"
                  className="flex justify-center items-center space-x-3 py-1"
                >
                  <h3>View All</h3>{" "}
                  <span>
                    <img
                      src={require("../../assets/imgs/icons/movie.svg").default}
                      className="w-5 h-6"
                    ></img>
                  </span>
                </Link>
              </div>
             
               <MoviesArea ></MoviesArea>
           
            </div>
          </div>
        </article>
      </section>

      {/*===================================END MOVIE REVIEWS=================================== */}
            {/*===================================Last Category=================================== */}
            <section className="categories_area_movies ">
        <article className="categories_top_section">
          <div className="grid md:grid-cols-[35%,65%]">
            <div className="col-span-1">
              <div className="categories_heading bg-black px-2 text-white border-x-[1px] flex justify-between items-center">
                <h3>Grocery Store</h3>
                <Link
                  to="#"
                  className="flex justify-center items-center space-x-3 py-1"
                >
                  <h3>View All</h3>{" "}
                  <span>
                    <img
                      src={require("../../assets/imgs/icons/movie.svg").default}
                      className="w-5 h-6"
                    ></img>
                  </span>
                </Link>
              </div>
              {data.map((sect, index) => (
                <div className="categories_content   grid grid-cols-2" key={index}>
                  {sect.store && (
                  
                      sect.store.map((item) => (
                      <GroceryStore g_image={item.image} title={item.title}></GroceryStore>
                      ))
                   
                  )}
                </div>
              ))}
            
              
           
            </div>
            <div className="col-span-1">
              <div className="categories_heading bg-black px-2 text-white border-x-[1px] flex justify-between items-center">
                <h3>News Videos</h3>
                <Link
                  to="#"
                  className="flex justify-center items-center space-x-3 py-1"
                >
                  <h3>View All</h3>{" "}
                  <span>
                    <img
                      src={require("../../assets/imgs/icons/movie.svg").default}
                      className="w-5 h-6"
                    ></img>
                  </span>
                </Link>
              </div>
             
              {data.map((sect, index) => (
                <div className="categories_content   grid md:grid-cols-3 grid-cols-2" key={index}>
                  {sect.news && (
                  
                      sect.news.map((item) => (
                      <NewsVideo n_video={item.n_video} title={item.title}></NewsVideo>
                      ))
                   
                  )}
                </div>
              ))}
           
            </div>
          </div>
          
        </article>
      </section>
      {/*===================================END Last Category=================================== */}

    </>
  );
}
