import React, { useEffect, useState } from "react";
import { H3 } from "native-base";
import { StyleSheet, View } from "react-native";
import { Table, Row } from "react-native-table-component";
import axios from "axios";

const TableCelulaMembers = () => {
  const tableHeaders = ["Nome", "Cargo"];
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    async function getAllMembers() {
      const response = await axios.get("http://localhost:5001/api/leader/get-all-leds");
      const celulaMembers = response.data.response.data;
      setMemberList(celulaMembers);
    }
    getAllMembers();
  }, [])

  const renderRows = () => (
    memberList.map(member => {
      return <Row key={member._id} data={[member.ledName, member.ledRole]} textStyle={componentStyle.text} />
    })
  );

  return (
    <View style={componentStyle.viewStyle} >
      <H3 style={componentStyle.h3Style}>
        Membros da célula
      </H3>
      <Table style={componentStyle.tableStyle}>
        <Row data={tableHeaders} style={componentStyle.head} textStyle={componentStyle.tableHeader} />
        {renderRows()}
      </Table>
    </View>
  )
};

const componentStyle = StyleSheet.create({
  viewStyle: {
    width: "80%",
  },
  h3Style: {
    marginTop: "4%",
    marginLeft: "23%",
    fontWeight: "700",
    color: "#ff0064"
  },
  head: {
    height: 40,
  },
  tableHeader: {
    fontWeight: "800",
    textAlign: "center",
  },
  text: {
    marginBottom: "3%",
    textAlign: "center",
    paddingLeft: "4%",
    fontWeight: "400",
  },
  tableStyle: {
    backgroundColor: "#ffd2e5",
    borderRadius: 15,
    marginTop: 10
  }
});

export {
  TableCelulaMembers
}