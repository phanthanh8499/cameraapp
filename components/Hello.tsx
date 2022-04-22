// components/Hello.tsx
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export interface Props {
  name: string
  enthusiasmLevel?: number
  onIncrement?: () => void
  onDecrement?: () => void
}

interface State {
  enthusiasmLevel: number
}

const Hello: React.FC<Props> = (props) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState<number>(props.enthusiasmLevel || 1)

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () => setEnthusiasmLevel(enthusiasmLevel - 1);
  const getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!")

  
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello Con Cac {props.name + getExclamationMarks(enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    )
}

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  }
})

export default Hello;