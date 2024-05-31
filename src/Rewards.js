import React from 'react'
import Header from './components/Header';
import RewardPanel1 from './components/Rewardcomponents/RewardPanel-1';
import RewardPanel2 from './components/Rewardcomponents/RewardPanel-2';
import RewardPanel3 from './components/Rewardcomponents/RewardPanel-3';
import RewardPanel4 from './components/Rewardcomponents/RewardPanel-4';
import Footer from './components/Footer';

const Rewards = () => {

  let img1 = "./Images/strbcksimg1.jpg";
  let img2 = "./Images/strbcksimg2.jpg";
  let img3 = "./Images/strbcksimg3.jpg";
  let img4 = "./Images/strbcksimg4.jpg";
  let img5 = "./Images/strbcksimg5.jpg";

  const images = [img1,img2,img3,img4,img5];

  let head1 = "Customize your drink";
  let head2 = "Brewed hot or iced coffee or tea, bakery item, packaged snack and more";
  let head3 = "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast";
  let head4 = "Sandwich, protein box or at-home coffee";
  let head5 = "Select Starbucks® merchandise";

  const headings = [head1,head2,head3,head4,head5];

  let para1 = "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.";
  let para2 = "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.";
  let para3 = "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.";
  let para4 = "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.";
  let para5 = "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.";

  const paragraphs=[para1,para2,para3,para4,para5];
  return (
    <>
      <Header/>
      <RewardPanel1/>
      <RewardPanel2/>
      <RewardPanel3 image={images} heading={headings} paragraph={paragraphs}/>
      <RewardPanel4/>
      <Footer/>
    </>)
}

export default Rewards;
