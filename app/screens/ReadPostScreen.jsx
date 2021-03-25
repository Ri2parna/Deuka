import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { ScrollView } from "react-native-gesture-handler";
import BitterFontText from "../components/BitterFontText";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Colors from "../config/colors";
import moment from "moment";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ReadPostScreen = ({ navigation, route }) => {
  const {
    title,
    subTitle,
    body,
    createdAt,
    authorName = "Rituparna Das",
  } = route.params;
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        borderColor: "red",
        borderWidth: 2,
      }}
    >
      <Title size={32}>{title}</Title>
      {/* author details */}
      <View
        style={{
          flexDirection: "row",
          padding: 4,
        }}
      >
        <Avatar />
        <View>
          <ShimmerPlaceholder visible={true}>
            <SubTitle color={Colors.secondary}>{authorName}</SubTitle>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder visible={true}>
            <SubTitle color={Colors["grey-8"]}>
              {moment(createdAt).fromNow()}
            </SubTitle>
          </ShimmerPlaceholder>
        </View>
      </View>
      <View>
        <SubTitle>{subTitle}</SubTitle>
        <BitterFontText>{body}</BitterFontText>
      </View>
      {/* <View
        style={[
          styles.bottomActions,
          { position: "absolute", bottom: 0, left: 0, right: 0 },
        ]}
      /> */}

      {/* featured posts */}
      <View>
        <Title size={24}>Featured</Title>
        <View style={{ padding: 8 }}>
          <Text numberOfLines={3}>{text.slice(0, 600)}</Text>
        </View>
        <View style={{ padding: 8 }}>
          <Text numberOfLines={3}>{text.slice(300, 600)}</Text>
        </View>
        <View style={{ padding: 8 }}>
          <Text numberOfLines={3}>{text.slice(200, 600)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReadPostScreen;

const styles = StyleSheet.create({
  bottomActions: {
    height: 80,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  avatar_image: {
    height: 44,
    width: 44,
    borderRadius: 50,
    marginRight: 4,
  },
});

const text = `It was the best of all times or the worst of all times. But worst of all is when a child wants to “help” you with something. You know that accepting their help will quadruple the time, energy, and resources required to get anything done. You realise that it’d be far simpler to do the job yourself. You’re aware that they’ll get bored halfway through and give up. But what are you supposed to tell them? They’re so enthusiastic, so earnest, so eager to contribute. So you take a deep breath, grit your teeth into a smile, and watch them make a mess.
If you’ve been watching the trajectory of anti-racism over the past few years, you can probably relate. It’s become an exercise in patiently explaining things that should be painfully obvious. It’s an endless parade of clickbait headlines and performative outrage. It’s dominated by people who seem as if they want to help but are hopelessly confused about how to do so.
For example, Los Angeles private institution Brentwood School recently announced plans to segregate parent-teacher meetings by race as part of its (and I’m not kidding here) “Inclusive Excellence Racial Equity” initiative. White parents will meet with White teachers, Black parents will meet with Black teachers, Latinx parents with Latinx teachers. I presume that interracial families will need to separate in the name of progress.
Watching these “allies” blunder their way around the anti-racism landscape feels like watching a toddler trying to perform open-heart surgery. The stakes are too high. The mistakes are too costly.
If a child had an idea this asinine, it would be easier to cope. You could explain in clear, age-appropriate language why racial segregation is not the best path to “inclusive excellence.” You could point out that while some parents may have issues directly related to their race, preventing other parents and teachers from hearing them is likely to make those problems worse. You could remind them in your gentlest, most tender-hearted voice that classifying people by race promotes racism, rather than — what was it again? Oh yes, INCLUSIVE EXCELLENCE AND RACIAL EQUITY!
A few hours north in the Bay Area, there’s Meyerholz Elementary School, where eight-year-old children learn to rank themselves according to the power and privilege of their race, gender, and sexuality. It’s how you might reimagine Jane Elliott’s famous “brown eyes, blue eyes” experiment if you utterly failed to understand it.
These children aren’t learning to look beyond their superficial differences. They aren’t learning the importance of treating others with compassion. They’re being taught, at eight years old, that the most fundamental aspects of who they are will forever mark them as “oppressor” or “oppressed.” They’re learning to think of each other as a collection of labels instead of complex human beings. They’ll likely carry the hangover of this “education” for the rest of their lives.
Then we have the people who treat racism as if it’s a treasure hunt. They scurry around in search of increasingly abstract, petty, blink-and-you’ll-miss-it forms of racism to submit for our approval. Gardening, rocks, Mozart, knitting, the countryside, cycling, floristry, fast food (but also veganism), and more have been “called out” in the name of anti-racism. Even worse, respected news organisations uncritically publish this nonsense so that everybody can see how “woke” they are.
If I were a more cynical person, I might suspect that these people aren’t trying to fight racism at all. I might ask whether headlines like “Can Dogs Be Racist?” are designed to do anything more than attract clicks and advertising dollars. I might even suggest that the people who write this garbage are motivated by nothing more than greed and the desire to collect virtue-signaling brownie points on Twitter.`;

const Avatar = () => {
  const image_source = {
    uri: "https://i.pravatar.cc/200",
  };
  return (
    <View style={styles.avatar_image}>
      <ShimmerPlaceholder style={styles.avatar_image} visible={true}>
        <Image style={styles.avatar_image} source={image_source} />
      </ShimmerPlaceholder>
    </View>
  );
};
