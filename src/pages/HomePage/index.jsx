import {getMovieList} from "reducers/movieSlice";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import Slider from "react-slick";
import {Container} from "reactstrap";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselMovie from "components/Carousel";
import News from "components/News";
import LichChieuCum from "components/LichChieuCum";
import "./index.scss";
import {PICK_PHIM} from "../../reducers/movieSlice";

export default function HomePage() {
  const {movieList} = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    rows: 2,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    dispatch(getMovieList());
  }, [movieList]);

  const handleMovieClick = (maPhim, tenPhim) => {
    console.log(tenPhim);
    history.push(`/phim/${maPhim}`);
    dispatch(PICK_PHIM(tenPhim));
  };

  return (
    <>
      <CarouselMovie />
      <Container style={{margin: "100px auto"}}>
        <div className="list-title">
          <h3 className="title">Đang chiếu</h3>
          <h3 className="title">sắp chiếu</h3>
        </div>
        <Slider {...settings}>
          {movieList.map((item) => (
            <div key={item.maPhim} onClick={() => handleMovieClick(item.maPhim, item.tenPhim)}>
              <div className="phimm">
                <img src={item.hinhAnh} alt={item.tenPhim} />
                <p>{item.tenPhim}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
      <LichChieuCum />
      <News />
    </>
  );
}

// function SampleNextArrow(props) {
//   const {className, style, onClick} = props;
//   return (
//     <div
//       className={className}
//       style={{...style, display: "inline-block", color: "blue", width: 30, height: 30, background: "red"}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const {className, style, onClick} = props;
//   return (
//     <div
//       className={className}
//       style={{...style, display: "block", width: 30, height: 30, background: "green"}}
//       onClick={onClick}
//     />
//   );
// }
