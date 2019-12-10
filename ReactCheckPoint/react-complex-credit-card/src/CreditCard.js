import React, { Component } from "react"
import "./CreditCard.css"

const logo =
  "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjqqafP86vmAhWO_KQKHUYGCIUQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FMasterCard-Visa-Credit-Card-Decals%2Fdp%2FB00E7I6KWI&psig=AOvVaw3KB6dS-Fg5GpKnBHdB9Ouh&ust=1576095549716001"

const renderCardNumber = cardNumber => {
  const dots = Array.from(
    {
      length: 16 - cardNumber.length
    },
    () => "*"
  ).join("")
  return (cardNumber + dots)
    .match(/.{0,4}/g)
    .slice(0, -1)
    .join(" ")
}

const renderCardHolder = cardHolder =>
  cardHolder.toUpperCase() || "your name here".toUpperCase()

const renderValidThru = validThru => {
  const dots = Array.from(
    {
      length: 4 - validThru.length
    },
    () => "*"
  ).join("")
  return (validThru + dots)
    .match(/.{0,2}/g)
    .slice(0, -1)
    .join("/")
}

const CreditCard = props => (
  <div className="credit-card">
    <h1 className="company-name">Company name</h1>
    <img
      className="chip-image"
      src="https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png"
    />
    <div className="card-info">
      <div className="card-info-text">
        <h2 className="credit-number">{renderCardNumber(props.cardNumber)}</h2>
        <h2 className="valid-thru">{renderValidThru(props.validThru)}</h2>
        <h2 className="card-holder">{renderCardHolder(props.cardHolder)}</h2>
      </div>
      <div className="card-info-logo">
        <img src={logo} />
      </div>
    </div>
  </div>
)

export default CreditCard
