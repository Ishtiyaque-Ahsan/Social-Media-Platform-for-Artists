import React from 'react';
import FilterIcon from './Filter_icon.png';
import SearchPic from './Search_icon.png';
import menuu from '../assets/menu-3.png';

function ProfileSection() {
  return (
    <div
      style={{
        marginTop: "10px",
        height: "50px",
        width: "70%",
        border: "2px solid black",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        backgroundColor: 'lightgray',
      }}
    >
      <div
        style={{
          margin: "2px 25px",
          height: "30px",
          width: "15%",
          border: "2px solid black",
          borderRadius: "150px",
          display: "flex",
        }}
      ></div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "7px",
          marginRight: "10%",
        }}
      >
        <h5>Souvik Das</h5>
      </div>
    </div>
  );
}

function FilterButton() {
  return (
    <div
      className="abc"
      style={{
        margin: "2px 2px",
        height: "30px",
        width: "7%",
       // border: "2px solid black",
        borderRadius: "150px",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={FilterIcon} alt="Filter Icon" className="img___filter" />
    </div>
  );
}
function SearchButton() {
  return (
    <div
      className="abc"
      style={{
        margin: "2px 2px",
        height: "30px",
        width: "7%",
       // border: "2px solid black",
        borderRadius: "150px",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={SearchPic} alt="Filter Icon" className="img___filter" />
    </div>
  );
}
function MenuuButton() {
  return (
    <div
      className="abc"
      style={{
        margin: "2px 2px",
        height: "30px",
        width: "7%",
       // border: "2px solid black",
        borderRadius: "150px",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={menuu} alt="Filter Icon" className="img___menuu" />
    </div>
  );
}
function FilterSection() {
  return (
    <div
      style={{
        marginTop: "17px",
        height: "36px",
        width: "130%",
        border: "2px solid black",
        borderRadius: "0 10px 10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <SearchButton />
      <FilterButton />
      <MenuuButton />
    </div>
  );
}

export default function Mess_bar_top() {
  return (
    <div className="Mess_box___top">
      <ProfileSection />
      <FilterSection />
    </div>
  );
}
