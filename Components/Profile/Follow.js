import React, { useState } from "react";

import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Redux
import { connect } from "react-redux";
import { followProfile } from "../../redux/actions";

const Follow = ({
  followed,
  followProfile,
  handelPress,
  profile,
  following,
  followers,
}) => {
  console.log("followed", followed);
  console.log("following", following);
  console.log("followers", followers);

  function handelFollow() {
    followProfile({ profile_id: profile.id });
    if (followed) {
      handelPress(false, following, followers - 1);
    } else {
      handelPress(true, following, followers + 1);
    }
  }

  return (
    <View style={styles.statsBoxTitle}>
      <Ionicons
        name="md-person"
        size={24}
        color="black"
        onPress={handelFollow}
      ></Ionicons>
      {followed ? (
        <Text style={[styles.text, styles.subText]}>unfollow</Text>
      ) : (
        <Text style={[styles.text, styles.subText]}>Follow</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },

  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },

  statsBoxTitle: {
    alignItems: "center",
    flex: 1,
  },
});
const mapStateToProps = (state) => ({
  username: state.profileReducer.name.username,
});
const mapDispatchToProps = {
  followProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
{
  /* <View style={{ alignContent: "center", alignItems: "center" }}>
      <View style={{ padding: 10 }}>
        <Text>{following} Following</Text>
        <Text>{followers} Followers</Text>
      </View>
      <View style={{ padding: 20 }}>
        {username != owner && (
          <Button bordered dark onPress={handelFollow}>
            {followed ? <Text>Unfollow</Text> : <Text>Follow</Text>}
          </Button>
        )}
      </View>
    </View> */
}
