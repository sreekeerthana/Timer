import { css } from 'ing-web/core.js';

export const TestApplicationStyle = css`

.bgColor
    {
      height:500px;
      background-color: #2c3e50;
      overflow: auto;
    }

.mainDiv
    {
      margin-top:30px;
    }

.mainDiv input
    {
      float:left;
    }

input
   {
      height:20px;
      padding: 2rem;
      margin: 4px;
      font-size: 1rem;
      width: 270px;
   }
.clearfix 
    {
      overflow: auto;
    }

.pauseClr
    {
      background: yellow;
    }

.wraper
    { 
      clear: both;
      width: 200px;
      background: #2ecc71;
      color: #fff;
      padding: 10px;
      box-sizing: border-box;
    }

.timer 
    {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
      padding:7px;
    }

.link ul 
    {
      padding: 0px;
      margin: 0px;
    }

.link ul li 
    {
      display: inline-block;
      font-size: 14px;
      padding:5px;
    }

.link ul li a
    {
      cursor:pointer;
    } 
     
.timer-div li
    {
      display: inline-block;
    }
`;
