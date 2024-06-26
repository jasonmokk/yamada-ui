import { ColorModeProvider, ThemeProvider } from "@yamada-ui/core"
import { renderHook } from "@yamada-ui/test"
import { useToken } from "../src"

const theme = {
  styles: {
    layerStyles: {
      muted: { bg: "gray.500" },
    },
    textStyles: {
      gradient: {
        w: "full",
        fontSize: "5xl",
        bgGradient: "linear(to-l, #7928CA, #FF0080)",
        bgClip: "text",
      },
    },
  },
  colors: {
    gray: {
      50: "#dedfe3",
      100: "#d3d5da",
      200: "#b7bbc3",
      300: "#9ea3ae",
      400: "#828997",
      500: "#6b7280",
      600: "#565c67",
      700: "#434851",
      800: "#2e3138",
      900: "#1c1e21",
      950: "#101113",
    },
    pink: {
      50: ["#ffecf2", "#ffeef4"],
      100: ["#ffd9e6", "#ffdde9"],
      200: ["#ffb4cd", "#ffbcd2"],
      300: ["#ff8eb4", "#ff9abc"],
      400: ["#ff689a", "#ff78a5"],
      500: ["#ff4281", "#ff578f"],
      600: ["#ff1161", "#ff226b"],
      700: ["#df004a", "#ec004f"],
      800: ["#ae003a", "#b7003d"],
      900: ["#7d002a", "#82002b"],
      950: ["#650022", "#670022"],
    },
  },
  transitions: {
    property: {
      common:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      dimensions: "width, height",
      position: "left, right, top, bottom",
      background: "background-color, background-image, background-position",
    },

    easing: {
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },

    duration: {
      "ultra-fast": "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      "ultra-slow": "500ms",
    },
  },
  semantics: {
    colors: {
      primary: "gray.500",
      secondary: ["pink.500", "pink.400"],
      tertiary: ["#000000", "#ffffff"],
    },
  },
}

describe("useToken", () => {
  test("正しく値を取得する", () => {
    const { result } = renderHook(() => useToken("colors", "gray.500"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBe("#6b7280")
  })

  test("不明なトークンの場合、正しくundefinedを返す", () => {
    const { result } = renderHook(() => useToken("colors", "unknown"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBeUndefined()
  })

  test("正しくライトモードの値を取得する", () => {
    const { result } = renderHook(() => useToken("colors", "pink.500"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toBe("#ff4281")
  })

  test("正しくダークモードの値を取得する", () => {
    const { result } = renderHook(() => useToken("colors", "pink.500"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toBe("#ff578f")
  })

  test("正しくlayerStyleの値を取得する", () => {
    const { result } = renderHook(() => useToken("layerStyles", "muted"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toStrictEqual({ bg: "gray.500" })
  })

  test("正しくtextStyleの値を取得する", () => {
    const { result } = renderHook(() => useToken("textStyles", "gradient"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toStrictEqual({
      w: "full",
      fontSize: "5xl",
      bgGradient: "linear(to-l, #7928CA, #FF0080)",
      bgClip: "text",
    })
  })

  test("正しくtransitionsの値を取得する", () => {
    const { result: result1 } = renderHook(
      () => useToken("transitionProperty", "common"),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ),
      },
    )
    const { result: result2 } = renderHook(
      () => useToken("transitionDuration", "faster"),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ),
      },
    )
    const { result: result3 } = renderHook(
      () => useToken("transitionEasing", "ease-in"),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ),
      },
    )

    expect(result1.current).toBe(
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    )
    expect(result2.current).toBe("100ms")
    expect(result3.current).toBe("cubic-bezier(0.4, 0, 1, 1)")
  })

  test("正しくセマンティックの値を取得する", () => {
    const { result } = renderHook(() => useToken("colors", "primary"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    })

    expect(result.current).toBe("#6b7280")
  })

  test("正しくライトモードのセマンティックの値を取得する", () => {
    const { result } = renderHook(() => useToken("colors", "secondary"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toBe("#ff4281")
  })

  test("正しくダークモードのセマンティックの値を取得する", () => {
    const { result } = renderHook(() => useToken("colors", "secondary"), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
        </ThemeProvider>
      ),
    })

    expect(result.current).toBe("#ff78a5")
  })

  test("セマンティックのトークンに関連したトークンがない場合、セマンティックの値を返す", () => {
    const { result: result1 } = renderHook(
      () => useToken("colors", "tertiary"),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>
            <ColorModeProvider>{children}</ColorModeProvider>
          </ThemeProvider>
        ),
      },
    )
    const { result: result2 } = renderHook(
      () => useToken("colors", "tertiary"),
      {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>
            <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
          </ThemeProvider>
        ),
      },
    )

    expect(result1.current).toBe("#000000")
    expect(result2.current).toBe("#ffffff")
  })
})
