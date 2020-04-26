<template>
  <div>
    <v-subheader>2020-02-02 上午场</v-subheader>
    <v-card class="mb-3">
      <v-list dense>
        <v-list-item @click="">
          <v-list-item-avatar>
            <v-avatar color="primary">
              <span class="white--text headline">Z</span>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="mb-1">Zero</v-list-item-title>
            <v-list-item-subtitle class="mb-1">666/颗</v-list-item-subtitle>
            <v-list-item-action-text><v-icon x-small class="grey--text">fa-map-marker-alt</v-icon> 3号楼3F</v-list-item-action-text>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>人数:10</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item @click="">
          <v-list-item-avatar>
            <v-avatar color="primary">
              <span class="white--text headline">Z</span>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="mb-1">Zero</v-list-item-title>
            <v-list-item-subtitle class="mb-1">666/颗</v-list-item-subtitle>
            <v-list-item-action-text><v-icon x-small class="grey--text">fa-map-marker-alt</v-icon> 3号楼3F</v-list-item-action-text>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>人数:10</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>

      </v-list>
    </v-card>

    <v-btn absolute dark fab right color="primary" style="bottom: 16px" to="/create">
      <v-icon>fa-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
}
</script>
