import React from "react";
import Image from "next/image";
import Grid from "../styles/modules/grid.module.scss";
import Landing from "../styles/modules/landing.module.scss";
import Link from "next/link";
import { TypeNews } from "../generated/contentful";
import clsx from "clsx";

interface Props {
  items: TypeNews[];
}
const News: React.FunctionComponent<Props> = ({ items }) => {
  const displayCurrentTime = (data) => {
    let api = data.fields;
    const date = new Date(api.publishDate);
    const month = date.toLocaleString("default", { month: "long" });
    let time;
    time = month + " " + date.getDay() + ", " + date.getFullYear();
    return time;
  };

  return (
    <>
      <div className={clsx(Grid["container"], Grid["margin_center"])}>
        <div className={clsx(Grid["row"])}>
          <div className={clsx(Grid["col-xs-12"], Landing["news__title"])}>
            <h3>Latest News.</h3>
          </div>
        </div>
        <div className={clsx(Grid["row"], Landing["news__container"])}>
          <div className={clsx(Grid["col-xs-8"], Landing["news__layout"])}>
            <div
              className={clsx(
                Grid["row"],
                Landing["news__layout-featured"],
                ""
              )}
            >
              <div
                className={clsx(
                  Grid["col-lg-8"],
                  Grid["col-xs-12"],
                  Landing["news__layout-item"]
                )}
                style={{ position: "relative" }}
              >
                <Image
                  src={"http:" + items[0].fields.fullSizeImage.fields.file.url}
                  layout="fill"
                  objectFit={"cover"}
                  alt={items[0].fields.fullSizeImage.fields.description || ""}
                />
                <div className={clsx(Landing["news__layout-item-content"])}>
                  <p>{displayCurrentTime(items[0])}</p>
                  <h5>{items[0].fields.title}</h5>
                  <Link href={"/post/" + items[0].fields.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
              <div
                className={clsx(
                  Grid["col-lg-4"],
                  Grid["col-xs-12"],
                  Landing["news__layout-item"]
                )}
                style={{ position: "relative", backgroundSize: "cover" }}
              >
                <Image
                  src={"http:" + items[1].fields.fullSizeImage.fields.file.url}
                  layout="fill"
                  objectFit={"cover"}
                  alt={items[1].fields.fullSizeImage.fields.description || ""}
                />
                <div className={clsx(Landing["news__layout-item-content"])}>
                  <p>{displayCurrentTime(items[1])}</p>
                  <h5>{items[1].fields.title}</h5>
                  <Link href={"/post/" + items[1].fields.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={clsx(Grid["row"], Grid["between-lg"])}>
              <div
                className={clsx(
                  Grid["col-lg-4"],
                  Grid["col-xs-12"],
                  Landing["news__layout-item"]
                )}
                style={{ position: "relative" }}
              >
                <Image
                  src={"http:" + items[2].fields.fullSizeImage.fields.file.url}
                  layout={"fill"}
                  objectFit={"cover"}
                  alt={items[2].fields.fullSizeImage.fields.description || ""}
                />
                <div className={clsx(Landing["news__layout-item-content"])}>
                  <p>{displayCurrentTime(items[2])}</p>
                  <h5>{items[2].fields.title}</h5>
                  <Link href={"/post/" + items[2].fields.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
              <div
                className={clsx(
                  Grid["col-lg-4"],
                  Grid["col-xs-12"],
                  Landing["news__layout-item"]
                )}
                style={{ position: "relative" }}
              >
                <Image
                  src={"http:" + items[3].fields.fullSizeImage.fields.file.url}
                  layout={"fill"}
                  objectFit={"cover"}
                  alt={items[3].fields.fullSizeImage.fields.description || ""}
                />
                <div className={clsx(Landing["news__layout-item-content"])}>
                  <p>{displayCurrentTime(items[3])}</p>
                  <h5>{items[3].fields.title}</h5>
                  <Link href={"/post/" + items[3].fields.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
              <div
                className={clsx(
                  Grid["col-lg-4"],
                  Grid["col-xs-12"],
                  Landing["news__layout-item"]
                )}
                style={{ position: "relative" }}
              >
                <Image
                  src={"http:" + items[4].fields.fullSizeImage.fields.file.url}
                  layout={"fill"}
                  objectFit={"cover"}
                  alt={items[4].fields.fullSizeImage.fields.description || ""}
                />
                <div className={clsx(Landing["news__layout-item-content"])}>
                  <p>{displayCurrentTime(items[4])}</p>
                  <h5>{items[4].fields.title}</h5>
                  <Link href={"/post/" + items[4].fields.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
