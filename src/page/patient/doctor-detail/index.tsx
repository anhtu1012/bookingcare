import { Breadcrumb, DatePicker } from "antd";
import { AiFillLike } from "react-icons/ai";
import {
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaRegHandPointUp,
} from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./index.scss";
import { toast } from "react-toastify";
import { getDoctorDetail } from "../../../services/api";
import { useEffect, useState } from "react";
import LoadingTruck from "../../../components/loading";
import DisplayMarkdown from "../../../components/markdown";

function DoctorDetail() {
  const { doctorID } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [doctor, setDoctor] = useState("");
  const times = [
    "17:00 - 17:45",
    "18:00 - 18:45",
    "19:00 - 19:45",
    "20:00 - 20:45",
    "17:00 - 17:45",
    "18:00 - 18:45",
    "19:00 - 19:45",
    "20:00 - 20:45",
  ];
  const handleGetDoctorDetail = async (doctorID) => {
    setLoading(true);
    try {
      const res = await getDoctorDetail(doctorID);
      setDoctor(res.data.data);
      console.log(res.data.data);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }; // Disable past dates in the DatePicker
  useEffect(() => {
    handleGetDoctorDetail(doctorID);
  }, []);
  const disabledDate = (current) => {
    // Can not select days before today
    return current && current < moment().startOf("day");
  };
  if (loading || !doctor) {
    return <LoadingTruck />;
  }
  return (
    <div className="doctor-detail">
      <Breadcrumb
        className="doctor-detail__breadcrumb"
        style={{ margin: "16px 0" }}
      >
        <div style={{ paddingRight: "10px" }}>
          <IoIosHome size={20} />
        </div>

        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div className="doctor-detail__main-info">
        <div className="image">
          <img src={doctor.image} alt="Bác sĩ Hoài Hương" />
        </div>
        <div className="info">
          <h1>
            {doctor.positionData.value_vi} Bác Sĩ {doctor.firstName}{" "}
            {doctor.lastName}
          </h1>
          <span>{doctor.Markdown.description}</span>
          <span>
            <FaMapMarkerAlt color="black" /> Thành phố Hồ Chí Minh
          </span>
          <div className="like-share">
            <button className="button">
              <AiFillLike /> Thích 2
            </button>
            <button className="button">Chia sẻ</button>
          </div>
        </div>
      </div>
      <div className="doctor-detail__booking">
        <div className="booking-time">
          <div className="day">
            <DatePicker
              placeholder="Chọn ngày"
              className="day-timee"
              disabledDate={disabledDate} // Disable past dates
            />
          </div>
          <div className="title">
            <FaRegCalendarAlt size={14} /> Lịch Khám
          </div>
          <div className="time">
            {times.map((time, index) => (
              <button key={index} className="button-time">
                {time}
              </button>
            ))}
          </div>
          <div className="note">
            Chọn và đặt <FaRegHandPointUp /> (Phí đặt lịch 0đ)
          </div>
        </div>
        <div className="booking-price">
          <div className="info">
            <div className="title">Địa chỉ Khám</div>

            <p style={{ fontWeight: "bold", fontSize: "15px" }}>
              Phòng khám Da liễu Táo Đỏ
            </p>
            <span style={{ color: "gray", fontSize: "14px" }}>
              {doctor.address}
            </span>
          </div>
          <hr />
          <div className="price">
            <div className="title">
              GIÁ Khám:{" "}
              <span style={{ color: "black", fontWeight: "400" }}>
                100.000đ
              </span>
            </div>
          </div>
          <hr />
          <div className="note">
            <div className="title">LOẠI BẢO HIỂM ÁP DỤNG.</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="doctor-detail__markdown">
        <DisplayMarkdown content={doctor.Markdown.contentMarkdown} />
      </div>
    </div>
  );
}

export default DoctorDetail;
