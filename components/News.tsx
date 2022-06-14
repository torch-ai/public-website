import React from "react";
import Image from "next/image";
import Grid from "../styles/modules/grid.module.scss";
import Landing from "../styles/modules/landing.module.scss";
import Link from "next/link";
import { TypeNews } from "../generated/contentful";

interface Props {
  items: TypeNews[];
}
const News: React.FunctionComponent<Props> = ({ items }) => {
  const formatDateString = (newsItem: TypeNews) =>
    new Date(newsItem.fields.publishDate).toLocaleString("en-US", {
      dateStyle: "long",
    });

  return (
    <>
      <div className={`${Grid["container"]} ${Grid["margin_center"]}`}>
        <div className={`${Grid["row"]}`}>
          <div className={`${Grid["col-xs-12"]}  ${Landing["news__title"]}`}>
            <h3>Latest News.</h3>
          </div>
        </div>
        <div className={`${Grid["row"]} ${Landing["news__container"]}`}>
          <div className={`${Grid["col-xs-8"]} ${Landing["news__layout"]}`}>
            <div
              className={`${Grid["row"]} ${Landing["news__layout-featured"]} `}
            >
              <div
                className={`${Grid["col-lg-8"]} ${Grid["col-xs-12"]} ${Landing["news__layout-item"]}`}
                style={{ position: "relative" }}
              >
                <Image
                  src={"http:" + items[0].fields.fullSizeImage.fields.file.url}
                  layout="fill"
                  objectFit={"cover"}
                  alt={items[0].fields.fullSizeImage.fields.description || ""}
                />
                <div className={`${Landing["news__layout-item-content"]}`}>
                  <p>{formatDateString(items[0])}</p>
                  <h5>{items[0].fields.title}</h5>
                  <Link href={"/post/" + items[0].fields.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
              <div
                className={`${Grid["col-lg-4"]} ${Grid["col-xs-12"]} ${Landing["news__layout-item"]}`}
                style={{ position: "relative", backgroundSize: "cover" }}
              >
                <Image
                  src={"http:" + items[1].fields.fullSizeImage.fields.file.url}
                  layout="fill"
                  objectFit={"cover"}
                  alt={items[1].fields.fullSizeImage.fields.description || ""}
                />
                <div className={`${Landing["news__layout-item-content"]}`}>
                  <p>{formatDateString(items[1])}</p>
                  <h5>{items[1].fields.title}</h5>
                  <Link href={"/post/" + items[1].fields.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${Grid["row"]} ${Grid["between-lg"]}`}>
              <div
                className={`${Grid["col-lg-4"]} ${Grid["col-xs-12"]} ${Landing["news__layout-item"]}`}
                style={{ position: "relative" }}
              >
                <Image
                  src={"http:" + items[2].fields.fullSizeImage.fields.file.url}
                  layout={"fill"}
                  objectFit={"cover"}
                  alt={items[2].fields.fullSizeImage.fields.description || ""}
                />
                <div className={`${Landing["news__layout-item-content"]}`}>
                  <p>{formatDateString(items[2])}</p>
                  <h5>{items[2].fields.title}</h5>
                  <Link href={"/post/" + items[2].fields.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
              <div
                className={`${Grid["col-lg-4"]} ${Grid["col-xs-12"]}  ${Landing["news__layout-item"]}`}
                style={{ position: "relative" }}
              >
                <Image
                  src={"http:" + items[3].fields.fullSizeImage.fields.file.url}
                  layout={"fill"}
                  objectFit={"cover"}
                  alt={items[3].fields.fullSizeImage.fields.description || ""}
                />
                <div className={`${Landing["news__layout-item-content"]}`}>
                  <p>{formatDateString(items[3])}</p>
                  <h5>{items[3].fields.title}</h5>
                  <Link href={"/post/" + items[3].fields.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
              <div
                className={`${Grid["col-lg-4"]} ${Grid["col-xs-12"]} ${Landing["news__layout-item"]}`}
                style={{ position: "relative" }}
              >
                <Image
                  src={"http:" + items[4].fields.fullSizeImage.fields.file.url}
                  layout={"fill"}
                  objectFit={"cover"}
                  alt={items[4].fields.fullSizeImage.fields.description || ""}
                />
                <div className={`${Landing["news__layout-item-content"]}`}>
                  <p>{formatDateString(items[4])}</p>
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
