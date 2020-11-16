<Card>
  <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
    <View style={{ width: "70%" }}>
      <View style={{ display: "flex" }}>
        <Text style={{ fontWeight: "bold" }}>
          Title of the article which might be a little big and maybe a bit
          bigger
        </Text>
      </View>

      <Text>Subtitle of the blog</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          style={{ height: 30, width: 30, borderRadius: 50 }}
          source={{ uri: "https://i.pravatar.cc/200?img=57" }}
        />
        <Text>by Authors Name</Text>
      </View>
    </View>
    <Image
      style={{ height: 100, width: 100, borderRadius: 4 }}
      source={{ uri: "https://i.pravatar.cc/?img=63" }}
    />
  </View>
</Card>;
