(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{480:function(n,o,c){"use strict";c.r(o),o.default="// hash function copy from https://www.shadertoy.com/view/4djSRW\nfloat hash12(vec2 p)\n{\n    vec3 p3  = fract(vec3(p.xyx) * .1031);\n    p3 += dot(p3, p3.yzx + 33.33);\n    return fract((p3.x + p3.y) * p3.z);\n}\n\nvec2 hash22(vec2 p)\n{\n    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\n    p3 += dot(p3, p3.yzx+33.33);\n    return fract((p3.xx+p3.yz)*p3.zy) * 2.0 - 1.0;\n\n}\n\nfloat noise(vec2 pos) {\n    vec2 i = floor(pos);\n    vec2 f = fract(pos);\n    \n    float a = dot(hash22(i), f);\n    float b = dot(hash22(i + vec2(1, 0)), f - vec2(1, 0));\n    float c = dot(hash22(i + vec2(0, 1)), f - vec2(0, 1));\n    float d = dot(hash22(i + vec2(1, 1)), f - vec2(1, 1));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord ){    \n    vec2 pos = (2.0*fragCoord-iResolution.xy)/iResolution.y;\n\n    vec3 color = vec3(noise(pos * 10.) * .5 + .5);\n\n    fragColor = vec4(color, 1.0);\n}"}}]);