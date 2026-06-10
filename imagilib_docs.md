---
title: "Documentation"
source: "https://imagilabs.notion.site/Documentation-6abe65e2127c455d942eea5820d19587"
author:
published:
created: 2026-06-09
description: "A collaborative AI workspace, built on your company context. Build and orchestrate agents right alongside your team's projects, meetings, and connected apps."
tags:
  - "clippings"
---
Summary

Looking for more a complete resource for what you can code with imagi? Here you will find detailed explanations for everything coding-related.

Welcome to the world of

imagilib

where Python meets colors, pixels, and a lot of fun! 🌈 🤖 👩💻 📱 Brought to you by [imagi](https://imagilabs.com/).

You'll see the following emojis next to each section that tell you the (difficulty) level of the learning content:

Adventurer 🙋

Challenger 🕵️

Legendary 👩💻

imagilib

is a unique module or a collection of variables and functions that you can use when you are programming in the imagi app. In addition to

imagilib

, only some standard Python libraries can be used in the our app:

random

,

math

, and

datetime

. You can read in more detail about how to use all these libraries, variables and functions below.

Table of contents

### imagilib

This section documents the objects and functions in the

imagilib

module.

imagilib

is a [Python](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#5b7219647175452dbf33edac61b78988) module that contains all the predefined [variables](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#4dadab5662dc4c6a9a32f46bd7cbaa2e), [functions](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#7df2c51424e140b9a3abab33bdc3381f) and [classes](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#b18edb69ad2c441594003bfe5e83c3bc) that can be used in the imagi app coding environment (code editor). The

imagilib

module is imported into each coding project so that the objects and functions are available from the start.

#### Predefined (system) variables

Adventurer 🙋

Here is a list of the variables that can be used:

m

is our [matrix](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#66beaaf3ae3347e9a8bc3bc547860fe5) of pixels that we can program to turn

on

or

off

or even in different colors. It is an [array](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#6030d54ac32244d087259e3d5e89534a) of 64 pixels, arranged in 8 rows and 8 columns. Each element or pixel of the matrix can be accessed using a row and a column [index](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#bb50fd5fd5584a8a932fefdb8d7b805b).

\# Example m\[0\]\[0\] = on # this turns on the pixel in the upper left corner of the matrix m\[7\]\[0\] = R # this sets the color of the pixel in the bottom left corner to red

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffa6add3c-2c63-452e-be7e-4c7f999c60fe%2FIMG_7D6355A6ECDC-1.jpeg?table=block&id=cc017f91-d6f2-43de-9a94-243673ac82a8&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

Several color variables are also available that are defined using the [RGB color model](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#bbd0b59fb614491f81f426e1af41659e).

R = (255, 0, 0) # red G = (0, 255, 0) # green B = (0, 0, 255) # blue A = (0, 255, 255) # aqua Y = (255, 255, 0) # yellow O = (255, 165, 0) # orange M = (255, 0, 255) # magenta P = (148, 0, 211) # this is actually the dark violet RGB W = (255, 255, 255) # white K = (0, 0, 0) # black on = (255, 255, 255) # on is the same as white off = (0, 0, 0) # off is the same as black # these two pixels have the same color! m\[0\]\[0\] = R m\[0\]\[1\] = (255, 0, 0)

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0a7bbc68-f0b1-4b26-a02a-bcd62ce01190%2FIMG_7247.jpg?table=block&id=d9990dfc-8972-40c8-929d-eec641c794e7&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

blink\_rate

is a variable that can be used to create a blinking effect. When

blink\_rate = 0

there is no blinking. If

blink\_rate > 0

, the design in

m

will blink at a rate of

blink\_rate

number of times per second.

blink\_rate

supports fractional values and the maximum is 3.

\# Example m\[0\]\[0\] = on blink\_rate = 1 # this will make the pixel blink once per second

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/a2d75aa1-7607-4baf-96b7-d82f53cac543/blink.gif?table=block&id=ecf38e17-37a4-4574-be3f-6c6a70e079ed&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=Uf4RsWoGco4gwO8u3fSHH_GZfms6UJ1q8XgWONL-Fzc)

outdoor\_mode

is a variable that controls the [brightness of the LEDs](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#bad6f589eb124cb68854600aa95b7673) on your imagiCharm. It is a [boolean](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#aaea253e9b7e409dbc7d2abf71c31851) variable and it can take 2 values,

True

or

False

. You can read more about controlling the LED brightness [here](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#bad6f589eb124cb68854600aa95b7673).

\# Example m\[0\]\[0\] = R outdoor\_mode = True # this will make the LEDs brighter

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d76da1c-351a-4216-be1d-3c330ebd1e67%2FIMG_7246.jpg?table=block&id=50963a48-10a9-4418-b9d8-50b45b2afbf4&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

#### Functions

Adventurer 🙋

character(char, char\_color=on, back\_color=0)

Adds an 8x8 pixel version of the character

char

of color

char\_color

to

m

. A background color can be set using

back\_color

, or otherwise it can be left equal to 0 in which case the character is overlaid on top of the values that were already in

m

.

char

: The first argument of the function must be a character or a [string](https://www.notion.so/Encyclopedia-2350da7d9a954fbf9af42a06cd961a36#2f41b8b500b1487d915a47d2acafd424) of length 1. A character can be written between single quotes

'

or double quotes

"

.

char\_color

: The second argument is optional and must be a color defined as an (r, g, b) [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d). This can be one of the predefined color variables or a custom color. If not set, it takes its default value,

on

.

back\_color

: The third argument is optional and must also be a color defined as an (r, g, b) [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d). This can be one of the predefined color variables or a custom color. If not set, it takes its default value,

0

which means transparent.

\# Example 1: a character can be enclosed between " " or ' ' character("A") # or character('A')

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f80f99b-8e6d-4b48-a665-c69f309ea994%2FIMG_7248.jpg?table=block&id=4adfb7a8-4ae6-424f-9812-4ac0f67f0a29&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example 2: we can set the text color using a variable name or an (r, g, b) tuple character("A", M) # or character("A", (255, 0, 255))

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fffe7e8c9-7586-4339-a1ba-e5607a0e84a2%2FIMG_7251.jpg?table=block&id=22ec503f-c4fb-4998-94f4-ec1e20261335&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example 3: we can set both the text color and background color character("A", M, B) # or character("A", char\_color = M, back\_color = B)

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb8a88414-ac73-4ec5-8c90-de9432c47c23%2FIMG_7252.jpg?table=block&id=105f9824-da7b-429d-abc8-735c74e71fa3&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example 4: we can set only one of the optional arguments if we specify which argument it is character("A", back\_color = B)

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7fcac9d2-ddd2-4f3b-82ae-f210febd46f3%2FIMG_7253.jpg?table=block&id=fe2a7419-f435-43c0-8ae0-432c8f0e45c6&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example 5: setting my own own gradient background # create gradient background for i in range(8): for j in range(8): m\[i\]\[j\] = (0, 255 - 25 \* i, 25 \* j) # add character on top of the background character("B", K)

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4fb35b6-c8b1-469b-a5cb-ac4e671067a4%2FIMG_7254.jpg?table=block&id=ceb9c373-0f08-4a6f-af81-abc9aee815b9&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

scrolling\_text(text, text\_color=on, back\_color=off, duration=80, loop\_count=0)

Creates an animation of a text that is scrolling from right to left.

text

: The first argument of the function must be a sequence of characters or a [string](https://www.notion.so/Encyclopedia-2350da7d9a954fbf9af42a06cd961a36#2f41b8b500b1487d915a47d2acafd424). A string can be written between single quotes

'

or double quotes

"

. It must have at least 1 character and can have a maximum of 40 characters.

text\_color

: The second argument is optional and must be a color defined as an (r, g, b) [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d). This can be one of the predefined color variables or a custom color. If not set, it takes its default value,

on

.

back\_color

: The third argument is optional and must also be a color defined as an (r, g, b) [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d). This can be one of the predefined color variables or a custom color. If not set, it takes its default value,

off

.

duration

: The fourth argument is optional and must be a whole number representing milliseconds. This is called an [integer](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#358d222deb394d128e3a70e9e37b2ccb). The minimum value is 25 and the maximum value is 16777215. If not set, it takes its default value, 80.

loop\_count

: The fifth argument is optional and must be a whole number representing repetitions or loops. This is called an [integer](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#358d222deb394d128e3a70e9e37b2ccb). The minimum value is 0 (and it means loop forever) and the maximum value is 65535. If not set, it takes its default value, 0.

Note: the

scrolling\_text

function cannot be used together with other animations.

\# Example 1: only using the text argument scrolling\_text("hello world")

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/0139d3e7-4981-4e0d-900a-3baa5798efb3/hw1.gif?table=block&id=39aa2925-a2a9-4f0e-be11-e361f7699865&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=q7HSg5zXF4VPG_gtdArKigGKSK1WenN7JnfowYKULTE)

\# Example 2: setting the color of the text to orange scrolling\_text("hello world", O) # or scrolling\_text("hello world", (255, 165, 0)) # or scrolling\_text("hello world", text\_color=O)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/66485520-f478-46f7-9e93-4605c60d8951/hw2.gif?table=block&id=b15bee78-662e-4760-834e-6ff763764c8d&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=PGC0ejG_Ro4jlsUVVfv8Xrk90FBIhjdZ7_m-jEOJIuw)

\# Example 3: setting the colors of the text and the background scrolling\_text("hello world", O, B) # or scrolling\_text("hello world", text\_color=O, back\_color=B)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/0e5f3e97-b40f-40fd-b618-a4c0e42a7060/hw3.gif?table=block&id=fe28246a-d57d-401d-9b7e-c514599e8262&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=dvM2y-oXMVdcMkosaDTBhg8gC-_l6Atzee5daL572HU)

\# Example 4: setting the colors of the text and the background and the duration of each frame scrolling\_text("hello world", K, A, 120) # or scrolling\_text("hello world", text\_color=K, back\_color=A, duration=120) # or # we can even change the order of the arguments if we specify their name scrolling\_text("hello world", back\_color=A, duration=120, text\_color=K)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/779f2be2-db75-46e8-8b97-aea7d4f7c7d6/hw4.gif?table=block&id=f8471b46-cf61-4d61-b64f-0d1430e99c60&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=VNSJXtjoZhuG5r7-WOraWFJfGq4mhTF2LfE3Mu6ZKp0)

heart(color)

Creates a heart shape in the color specified by the

color

argument.

color

: the argument of the function is a color defined as an (r, g, b) [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d). This can be one of the predefined color variables or a custom color.

\# Example heart(G) # or heart((0, 255, 0))

![](https://imagilabs.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F42b7170c-c7c4-4e97-bf6a-2d600c17c8b8%2F1283ed70-60e0-4235-a1e2-2c6bb8c35dff%2F1b.png?table=block&id=354891be-0dfa-424a-8339-35e6d209ab27&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

background(color)

Set all the pixels in the matrix to the same color.

color

: the argument of the function is a color defined as an (r, g, b) [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d). This can be one of the predefined color variables or a custom color.

\# Example for rainbow background animation a = Animation() colors = \[R, O, Y, G, A, B, P, M\] for i in range(8): background(colors\[i\]) a.add\_frame(m)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/17d34265-3885-451c-bb33-a0148e5d92fc/rainbow_background.gif?table=block&id=a9bd6e21-13c1-4099-b31d-06ddc9abb022&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=ADeswDrhw6h5MkSuSR9zebsEkR6psvUC8TfDm5rJKPc)

clear()

Clears the entire matrix

m

, by setting each pixel to be

off

. 🤓 Pro tip 1️⃣: this function is actually implemented using the

background

function and is equivalent to:

background(0)

🤓 Pro tip 2️⃣: you will see that a very handy application of this function is to clear the matrix before programming it with the colors you will need for a new frame in your [animation](https://www.notion.so/Documentation-6abe65e2127c455d942eea5820d19587#5308f1c98f3646cebf6fa322fb5a3476).

#### Animations

Read more about Animations here 👇

[🎞️](https://imagilabs.notion.site/Animations-f4e1603d065242e4a4720f76fc88b791?pvs=25)

[

Animations

](https://imagilabs.notion.site/Animations-f4e1603d065242e4a4720f76fc88b791?pvs=25)

Challenger 🕵️

### Python Fundamentals

#### Commenting Code

Adventurer 🙋

Comments are essential for making your code readable and easy to debug. Python provides two types of comments:

Single-line comments

Use the

#

symbol to comment out a single line of code. Everything after the

#

on that line will be ignored by Python.

\# This is a single-line comment m\[0\]\[0\] = on # Turns on the top-left pixel

Multi-line comments

Use triple quotes (

'''

or

"""

) to create multi-line comments. These are useful for explaining larger blocks of code.

''' This is a multi-line comment. It helps describe how a section of code works. ''' m\[0\]\[0\] = on # Turns on the top-left pixel m\[7\]\[7\] = off # Turns off the bottom-right pixel

💡 Pro Tip: Commenting out lines is a great way to temporarily disable code without deleting it.

\# m\[3\]\[3\] = R # This line won't execute

#### Comparison operators

Challenger 🕵️

\>

is true when the left operand is greater than the right

\>=

is true when the left operand is greater than or equal to the right

\# Example to make a triangle background for i in range(8): for j in range(8): if i > j: # conditional statement with logical operator m\[i\]\[j\] = P else: m\[i\]\[j\] = A

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d83f51f-6e17-4db2-81d4-b9db4e1d5307%2FIMG_7731.jpg?table=block&id=e8d1c03b-cdf6-4f47-83d3-d494db1f04b6&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

<

is true when the left operand is less than the right

<=

is true when the left operand is less than or equal to the right

\# Example to make a triangle background for i in range(8): for j in range(8): if i < j: # conditional statement with logical operator m\[i\]\[j\] = M else: m\[i\]\[j\] = Y

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F684801ba-27fa-446b-a6a3-9aa3280c3836%2FIMG_7732.jpg?table=block&id=9de9b246-1fef-4a3b-8ab8-78aac019b237&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\==

is true when both operands are equal (different than = )

for i in range(8): for j in range(8): if i == j: # compares if i is equal to j m\[i\]\[j\] = Y # assigns the color Y to the pixel else: m\[i\]\[j\] = M

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa74ea41f-265c-40e0-a515-d6d20cb58dcc%2FIMG_7733.jpg?table=block&id=d135fd15-3fde-426e-aec5-ed5c2cf36785&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

!=

is true when operands are not equal

\# Example that is the opposite of above for i in range(8): for j in range(8): if i!= j: # compares if i is not equal to j m\[i\]\[j\] = Y # assigns the color Y to the pixel else: m\[i\]\[j\] = M

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff7c6b40b-463d-4beb-8301-a794cbb2d319%2FIMG_7734.jpg?table=block&id=6c658eb0-5a9a-42cf-a7ba-15343e81bd48&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

#### Logical operators

Challenger 🕵️

Logical operators are also known as [Boolean](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#aaea253e9b7e409dbc7d2abf71c31851) operators.

and

needs two operands and is true when both operands are true

\# Example def is\_even(n): if n/2 == int(n/2): return True else: return False for i in range(8): for j in range(8): if is\_even(i) and is\_even(j) is True: # you can also use is instead of == m\[i\]\[j\]= G else: m\[i\]\[j\]= M

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff6043bd6-86d9-4dd1-87c6-6f1522c06813%2FIMG_7736.jpg?table=block&id=f4fcba07-2e9b-4930-96f5-7cff472d6129&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

or

needs two operands and is true when either of the operands are true

\# Example def is\_even(n): if n/2 == int(n/2): return True else: return False for i in range(8): for j in range(8): if is\_even(i) or is\_even(j) is True: # you can also use is instead of == m\[i\]\[j\]= G else: m\[i\]\[j\]= M

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb9c71273-167e-4f66-8dd8-92bcbdd356f5%2FIMG_7737.jpg?table=block&id=7dc01c96-3ddb-44b1-aef5-fddb9a5bbee2&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

not

needs one operand and is true when the operand is false

\# Example def is\_even(n): if n/2 == int(n/2): return True else: return False for i in range(8): for j in range(8): if is\_even(i) or is\_even(j) is not True: # not True is False m\[i\]\[j\]= G else: m\[i\]\[j\]= M

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc8b7f976-1599-44c9-bf97-c4d1bbd4e168%2FIMG_7738.jpg?table=block&id=ba0ea719-d6e7-46ce-b24d-a7278dad6a45&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

#### Numbers

Challenger

There are three types of numbers (or numeric types) called [integers](https://www.notion.so/Encyclopedia-2350da7d9a954fbf9af42a06cd961a36#358d222deb394d128e3a70e9e37b2ccb), [floating point numbers](https://www.notion.so/Encyclopedia-2350da7d9a954fbf9af42a06cd961a36#034e08812a894f1d8f1ca9d516ce11be), and [complex numbers](https://www.notion.so/Encyclopedia-2350da7d9a954fbf9af42a06cd961a36#2a2aaee96e93428085f9577e01d861fc). Python supports all arithmetic operations that you learned about in school.

+

summation,

\-

difference,

\*

product,

/

division

\# Example to calculate indices m\[4+2\]\[8//4\] = B #same as m\[6\]\[2\] = B. note that // has to be used instead of / to convert index into integer, and not a float m\[2\*2\]\[6-2\] = G #same as m\[4\]\[4\] = G

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe863fd9a-a666-4bd8-86aa-409714d4a978%2FIMG_7259.jpg?table=block&id=1aa9ba5d-b47d-41d6-b338-83bb74bfc091&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

+

adds two numbers together which can also be stored in variables.

\# Example of using arithmetic operations to create designs # these RGB values are the imagi color palette! i\_p = (242, 170, 224) i\_b = (103, 212, 239) i\_y = (252, 244, 117) i\_o = (248, 163, 15) i\_g = (51, 225, 142) colors = \[i\_b, i\_g, i\_y, i\_o, i\_p\] for i in range(0, 8): for j in range(0, 8): m\[i\]\[j\] = colors\[int((i + j) / 3)\]

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4c7f81d0-cade-4025-828c-16ab1e11da46%2F5d.png?table=block&id=39695e22-d73a-4004-a3f1-22f2624e6daf&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

%

is the modulus sign. Modulo is the remainder of the division of left operand (dividend) by the right (divisor).

Code

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcca4a91f-0b9a-4df9-9378-00f926867e22%2FIMG_7384.jpg?table=block&id=16c4e5b7-bab2-4650-b50f-ba71ba98a500&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

Code - version 1

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7e3afbf7-a61d-4997-9785-46dc9a8964e5%2FIMG_7260.jpg?table=block&id=9b21955b-5f70-4469-a369-71d1fe9aa597&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

Code - version 2

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7e3afbf7-a61d-4997-9785-46dc9a8964e5%2FIMG_7260.jpg?table=block&id=df5372fe-c035-40b4-a9ca-dfb3102ad2d1&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

abs

calculates the [absolute value](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#e965a82fb3ee46ccbb9e868756b76fc2) of a number.

\# Example m\[abs(-5)\]\[2\]=B m\[abs(5)\]\[3\]=P

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4f2edfb5-22fb-4978-a6a5-c62471bcab2b%2FIMG_7261.jpg?table=block&id=45830396-5e96-4913-9c4b-a4979dccc026&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

Using these operators, we can make cool designs like the one below!

Code

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/cffb8275-2895-4810-81b4-b3d3bc4dade8/mathdesign.gif?table=block&id=1d620e45-0517-46fb-a6b2-f895d2f8695e&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=_pFOP6epv7tBFz5FuBoy5rJfKaaMPl_5MDmhD8rDy2E)

round(number,

ndecimals

)

Rounds a

number

(first argument) to a specific number of decimal points

ndecimals

(second argument)

Specifying

ndecimals

is optional, if not specified

ndecimals

is 0 and the number returned is the nearest integer as a [floating point number](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#034e08812a894f1d8f1ca9d516ce11be).\*

\# Example of a nearest integer calculator number = 5.67 character(str(round(number)),B)

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F48c718e7-7c5f-4a0c-8e4d-3c7050361348%2FIMG_7262.jpg?table=block&id=da1aa38a-cd71-43f6-ad4e-bca26c6999a9&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# By assigning a value to the second parameter number = 5.67 character(str(round(number, 0)),B)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/1ea766bf-249a-4a42-9beb-6979fe46d307/round6.0.gif?table=block&id=b48e2b46-9824-46c7-8191-c8412443be49&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=nWG2gOd5-SWxDpMxTWMB32mW9KCtYnFSHqAiymTG9Yw)

#### Lists

Challenger 🕵️

A [list](https://www.notion.so/Encyclopedia-2350da7d9a954fbf9af42a06cd961a36#716c1ea8684543a99da9c50724dc82c1) is a [sequence](https://www.notion.so/Encyclopedia-2350da7d9a954fbf9af42a06cd961a36#bff7eac2a4b84fffb7669d30a0aaac75). We can do many different types of operations with lists.

in

is an operation that checks whether a value is in your sequence and returns

True

if it is or

False

if it's not.

\# Example 1 for a value in the sequence evendigits = \[2, 4, 6, 8\] scrolling\_text("4" + str(4 in evendigits))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/0553a14b-d9c0-487e-b2fc-526b1d16bbdc/4true.gif?table=block&id=0f5741df-4aba-465f-b38b-cf773b08546a&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=2rbIY7_IHPIM_bhu1ZRtyR1e4EX3WuIEUFFHHn9Gb5k)

\# Example 2 for a value not in the sequence evendigits = \[2, 4, 6, 8\] scrolling\_text("5" + str(5 in evendigits))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/6b5d93f5-fc45-41ce-bfa0-feba87c395f1/5false.gif?table=block&id=32cae9fa-2b48-4f9e-a66c-f3c2f4402e55&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=lWIlNd7VxOdEjgWNVXJtdcHvqVEbGarN1khKTp8jfTM)

not in

is the negation of

in

, meaning if the value is not in your sequence it returns

True

and if the value is in your sequence it returns

False

.

\# Example 1 for a value in the sequence evendigits = \[2, 4, 6, 8\] scrolling\_text("4" + str(4 not in evendigits))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/e99a19a0-23c0-41d4-8cdf-cd3ac94857df/4false.gif?table=block&id=50c695a7-44e9-43c8-a4a3-aa1986876911&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=UEHoQEzWj7kG5jCufHkUdwTVWsc4DxqflX0cEYYE_8I)

\# Example 2 for a value not in the sequence evendigits = \[2, 4, 6, 8\] scrolling\_text("5" + str(5 not in evendigits))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/f8486003-f886-4f7a-8201-c863bd972320/5true.gif?table=block&id=3e2762a6-29cd-4ec4-ac0e-4748c478fdc7&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=WV6Ntu5toX8FK4EK_PihaXq7m7gzXLPN4eoS3GpmgMo)

+

combines two sequences, called [concatenation](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#a4b300da484741c68cd1e6926986d9a1).

\# Example of concatenation numbers1 = \[1,2,3\] numbers2 = \[4,5\] scrolling\_text(str(numbers1+numbers2))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/55911198-c772-4b62-865a-7f57c3dde9ff/seq1.gif?table=block&id=28b9b2d0-58f2-4efd-bb59-7bf2e2609bd4&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=CUfS275oL8ZE6Jm_d-90IlQNOJEo3WEGbjkoe3GeX_w)

\*

repeats a sequence a number of times.

\# Example of repetition numbers = \[1, 2, 3\] scrolling\_text(str(numbers \* 2))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/2c596919-3b58-4225-9732-c7bfab13705e/seq2.gif?table=block&id=e28473b4-0206-4fb5-ae70-a8f7f387ec30&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=3sgWh_gfF2RhgFpdiJDLV4G2KNjQTL-QDgv_hX-c9BU)

len

returns the length of the sequence, that is how many elements are in the sequence.

\# Example animals = \['cats', 'dogs', 'horses'\] # lists can contain any data type character(str(len(animals)))

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F318dfd1f-5116-4953-8f59-efdf1c5dde53%2FIMG_7269.jpg?table=block&id=88d5d71c-00c5-4080-9802-fffc0d6aee89&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

You can use [for loops](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#e6cb6b53f5a645c1a16ccdc6d847af87) that repeat your code for each element of a sequence using

len

. That way is it easy to run a loop depending on how many elements are in your list.

\# Example a = Animation() colors = \[R, O, Y, G, A, B, P, M\] for i in range(8): background(colors\[i\]) a.add\_frame(m) # can be written as a = Animation() colors = \[R, O, Y, G, A, B, P, M\] for i in range(len(colors)): background(colors\[i\]) a.add\_frame(m) # now it is quicker to change how many colors you want in your animation!

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/17d34265-3885-451c-bb33-a0148e5d92fc/rainbow_background.gif?table=block&id=a9bd6e21-13c1-4099-b31d-06ddc9abb022&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=ADeswDrhw6h5MkSuSR9zebsEkR6psvUC8TfDm5rJKPc)

i

returns the i'th element in the sequence. Sequences in Python are zero-indexed (as you have seen with the matrix), meaning the first element's position is actually 0.

\# Example animals = \['cats', 'dogs', 'horses'\] i = 1 scrolling\_text(str(animals\[i\])) # or animals = \['cats', 'dogs', 'horses'\] scrolling\_text(str(animals\[1\]))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/f53481cc-feb8-4882-aa12-5191969fd2b3/dogs.gif?table=block&id=87e53ee5-db49-41c5-9472-17017d8d1db6&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=z2Eo3d5YH8jVDWFFyJ5cknp7RxCXTPYGq44ATnq1VTM)

min

returns the minimum(smallest) value of a sequence. If the elements are strings this would be the element that comes first in the dictionary.

\# Example 1 with numbers numbers = \[1, 2, 3\] character(str(min(numbers)))

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F50ffc8a9-b0c5-4b6e-ac14-f3c2a812c27f%2FIMG_7272.jpg?table=block&id=2f05b94b-3a1e-4e80-b214-7588b15c710e&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example 2 with strings animals =\['cats','dogs','horses'\] scrolling\_text(str(min(animals)))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/51b5f616-5813-4bde-865b-b42798496602/cats.gif?table=block&id=7ddae40f-3fa1-417e-ae30-b329ef674f5e&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=TdZ5z1d0l_vETkF929wbU-EmN9Xv1t28Q6K_LL-FrUQ)

max

returns the maximum(largest) value of a sequence. If the elements are strings this would be the element that comes last in the dictionary.

\# Example 1 with numbers numbers = \[1,2,3\] character(str(max(numbers)))

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa60918fb-fd4f-41f8-bad9-cf694146fe03%2FIMG_7269.jpg?table=block&id=cf753759-4a6b-4c04-a987-b7c8be9968b0&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example 2 with strings animals = \['cats', 'dogs', 'horses'\] scrolling\_text(str(max(animals)))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/43d56fba-3392-45fc-a981-628e2d9a60a1/horses.gif?table=block&id=18626481-9045-404a-ab3d-2eb77ecab2fe&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=CS-IxHgw3BG926wFYkDcM-s20HvEyaqqVoGIgsiNX64)

append

adds an element to the end of the list. You can also append lists to lists.

\# Example of sequence counter with a list of numbers that goes up to a random number import random #this is a standard module and is explained below counter = \[\] for i in range(0, random.randint(1, 9)): counter.append(i) scrolling\_text(str(counter))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/9a9174b8-d9af-4684-b448-20949394dde3/counter.gif?table=block&id=cb040b31-e857-4ed8-b25e-75524457366d&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=BO0qEUO0mcQCSoFkmps0gP1CSPy1wuheuMbr8MYrIG8)

reverse

updates the sequence with the reversed order of the elements in a list and doesn't take any [arguments](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#0ef60647d02c46058875ab3c0dbe1d40).

animals = \['cats', 'dogs'\] animals.reverse() scrolling\_text(str(animals))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/8b5a34a0-6a94-4213-a26d-3bc2797bd2fa/reverse.gif?table=block&id=b36e7188-3971-4f91-9fae-12faba914250&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=7G_MLuBw1eYIeOgcY_pvqGkDXSEXJn06ugHQLX7jMJs)

\# Example for symmetrical design a = Animation() colors = \[R, O, Y, G, A, B, P, M\] for i in range(8) for j in range(8): m\[i\]\[j\]=colors\[i\] a.add\_frame(m,200) colors.reverse() # Each time the loop repeats, the list is reversed

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/76866673-c1b7-408d-b738-ba3e19b0f008/reverse_design.gif?table=block&id=dccc2715-87ac-4c52-8f8e-6498d1ad8a9c&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=w_kXyYayqoMpo76dTu2bd0UJW3w3cKuaxUSehbVrd0I)

#### Tuples

Challenger 🕵️

Challenger 🕵️

\# Tuples inside list example indices = \[(0, 0), (0, 1)\] for item in indices: item\[0\]=row item\[1\]=col m\[row\]\[col\]= on # or indices = \[(0, 0), (0, 1)\] for item in indices: m\[item\[0\]\]\[item\[1\]\]= on

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe0d24758-e844-4601-829e-9bf6eb993aec%2FIMG_7394.jpg?table=block&id=59dd32e4-95be-42f0-8951-9639bb1a5939&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

+

combines two [tuples](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d), called [concatenation](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#a4b300da484741c68cd1e6926986d9a1). To see an example of this with lists, [click here](https://www.notion.so/Documentation-6abe65e2127c455d942eea5820d19587#2baf23f3896d47adbaca5492dad34bc1).

\*

repeats a [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d) a number of times. To see an example of this with lists, [click here](https://www.notion.so/Documentation-6abe65e2127c455d942eea5820d19587#7b932d409cb541b0b15bd4a6fdd00a6b).

\[\]

selects an item or a [slice](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#344989a967404723ada8226d6187b4d1) from a [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d). To select an item you use

tuple\[i\]

, remembering that the sequence is [zero-indexed](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#7fad42c173dd450e9d4c173057cb4ff0). To select a slice you use [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d) \[start:end\]; if start is omitted, the default is 0, and if end is admitted, the default is -1 (which is the last element of the [tuple](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d))

\# Example to select individual colors from an RGB value color=(23,160,190) #RGB values are tuples! for i in range(len(color)): if i == 0: # this is the first item red = color\[i\] if i == 1: # this is the second item blue = color\[i\] if i == 2: # this is the third (last) item green = color\[i\] scrolling\_text('red: ' + str(red)+' blue:' + str(blue)+' green: ' + str(green), color)-

max

and

min

are functions you can not only [use with lists](https://www.notion.so/Documentation-6abe65e2127c455d942eea5820d19587#2b7b5029150b4bb0b3f41113f8ad0fca) but also with [tuples](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#5bc3b3fcef29419987004dfbb43b062d)!

\# Example color=(23,160,190) #RGB values are tuples! scrolling\_text('max: ' + str(max(color))+' min:' + str(min(color)), color)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/db089bea-8a33-4e76-9986-82c7862ac450/minmaxtuple.gif?table=block&id=02ab9cc1-63b0-4e6c-8297-0af27e2b551c&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=FXLu1vuidPY3IXzgmKVHKv6lcC22srdgVPZ8TmMnYPI)

#### Range

Challenger 🕵️

range(start, stop, step)

The range function returns a sequence of numbers

start

: the first argument of the function is optional and is an integer specifying at which position to start. The default value is 0.

stop

: the second argument of the function is required and is an integer specifying at which position to stop. This number is not included in the range.

step

: the third argument of the function is optional and is an integer number specifying the incrementation, that is, by how much two numbers in the sequence differ from each other. The default value is 1.

rows = range(0, 8, 1) for row in rows: m\[row\]\[4\] = A # or rows = range(8) for row in rows: m\[row\]\[4\] = A

\# Example from above using for loops and range a = Animation() colors = \[R, O, Y, G, A, B, P, M\] for i in range(8): #every integer from 0 up to 8 background(colors\[i\]) a.add\_frame(m) # or a = Animation() colors = \[R, O, Y, G, A, B, P, M\] for i in range(len(colors)): background(colors\[i\]) a.add\_frame(m) # now it is quicker to change how many colors you want in your animation!

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2ca28703-4be4-4400-bc85-24e2f9849a77%2FIMG_7396.jpg?table=block&id=8e0d9376-31e0-40b9-9667-30598b5e57fb&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl) ![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/17d34265-3885-451c-bb33-a0148e5d92fc/rainbow_background.gif?table=block&id=a9bd6e21-13c1-4099-b31d-06ddc9abb022&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=ADeswDrhw6h5MkSuSR9zebsEkR6psvUC8TfDm5rJKPc)

#### Text sequences

Challenger 🕵️

Text (or textual data) is handled in Python with objects called [strings](https://www.notion.so/Encyclopedia-2350da7d9a954fbf9af42a06cd961a36#2f41b8b500b1487d915a47d2acafd424).

str

can be used to create strings from other types of objects.

\# Example # age is a number (integer) age = 14 # we create a string representation of the age age\_string = str(age) # we can now pass this as an argument to the scrolling\_text function scrolling\_text("I am " + str(age) + " years old.")

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/ddfe120f-eae1-4a30-9159-295e3ce5322b/str1.gif?table=block&id=47a0aa4d-7309-4746-b7f6-39d96b57daba&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=dqzq4cVOGzbvwcHXirSF5AyEP07OdacMbXyR2pHBLF8)

There are several methods that we can use for [string](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#2f41b8b500b1487d915a47d2acafd424) objects. Here are some examples:

capitalize()

returns the string with the first character of the string capitalized

\# Example to capitalize names name = 'learning hub' capitalized\_name = name.capitalize() scrolling\_text(capitalized\_name, P) # or name = 'learning hub' capitalized\_name = str.capitalize(name) # not the norm scrolling\_text(capitalized\_name, P)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/81809e68-2bac-4c06-971a-0138f44d4e0c/Learning_hub.gif?table=block&id=ce7eaaae-3f31-4d69-aa4f-92618e65ef09&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=BXO3bOkVwwqP64NifucO6TZvl6HduWzQdGdcbvxRr-Y)

isalnum()

returns

True

if all the characters in the string are [alphanumeric](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#682113f1bc3145bc95b1f4b805cfb8e3)

returns

False

if at least one character is not [alphanumeric](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#682113f1bc3145bc95b1f4b805cfb8e3)

Code

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/db436bbc-4f74-416b-a4e4-d899e9ba75fb/alnum_Animation.gif?table=block&id=145723d7-832a-4ccf-a79f-1b6261d4e6fb&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=s-E7sY6K9e-bchaLW7b3raxrBNrK4TN6zTd_dZgb-Bg)

isalpha()

returns

True

if all characters in the string are alphabets(both lowercase and uppercase)returns

False

if at least one character is not alphabet

\# Example with alphabet string def true(): background(G) def false(): background(R) string = 'imagi' if string.isalpha() == True: true() elif string.isalpha() == False: # could also use an else statement since isalpha can only return True or False false()

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8ee67499-d983-459a-a1fa-572421bfd7ac%2FIMG_7512.jpg?table=block&id=599cd9b1-b67c-4bef-973e-ee6835c2634e&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example with alphanumeric string def true(): background(G) def false(): background(R) string = 'im4g1Labs!' if string.isalpha() == True: true() else: false()

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd7ed03d-fc5d-4ab3-91d2-a2b0383f68f1%2FIMG_7513.jpg?table=block&id=5fc83934-bc73-436e-85e0-7b91685fa7a1&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

isnumeric()

returns True if all characters in the string are [numeric characters](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#683c8f191f26400fa914da4f5c5685ae)

returns False if at least one character in the string is not a [numeric character](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#683c8f191f26400fa914da4f5c5685ae)

\# Example with alphabet string def true(): background(G) def false(): background(R) string = '255' if string.isalpha() == True: true() elif string.isalpha() == False: false()

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8ee67499-d983-459a-a1fa-572421bfd7ac%2FIMG_7512.jpg?table=block&id=8ef31e18-af1c-42eb-bf2b-f00663a3fc35&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example with alphanumeric string def true(): background(G) def false(): background(R) string = '255.0' if string.isalpha()== True: true() else: false() # the character. is not numeric, so even though 255.0 is a number isnumeric() returns false as it looks at the characters in the string rather than the string as a whole

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd7ed03d-fc5d-4ab3-91d2-a2b0383f68f1%2FIMG_7513.jpg?table=block&id=9d4a9eb4-a8fa-4335-8380-436ea6f164ae&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

You can [read](https://docs.python.org/3/library/stdtypes.html#string-methods) here about all the string methods that can be used in Python.

### Python Standard libraries

In addition to

imagilib

, some standard Python libraries can also be used in the imagi app, for example:

random

,

math

, and

datetime

. Unlike

imagilib

, to use these modules you have to import them into the beginning of your code. You can read in more detail about how to use these libraries, variables and functions below.

### random

This section documents the objects and functions in the

random

module.

random

is a [Python](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#5b7219647175452dbf33edac61b78988) module that provides access to random generator operations.

Almost all module functions depend on the basic function

random()

, which generates a random [float](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#034e08812a894f1d8f1ca9d516ce11be) in the semi-open [range](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#bbd0b59fb614491f81f426e1af41659e) \[0.0, 1.0).

To use the

random

[module](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#17bcda55941d460a9604d4fb3d8a0ec9), you have to import it into the beginning of your code project. When you use functions from the module, you have to indicate that the function you are calling belongs to the

random

module. If you don't want to keep typing out

random

before all your functions, you can also import libraries as a shorter name that follow the [naming rules](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#8e8140d6d669425a943b4bdd457d945f) for variables so it is more efficient to use them.

#### Functions for integers

Legendary 👩💻

random.randrange(start, stop, \[step\])

allows to produce selections over an arbitrarily large range. This function takes 3 inputs, start is the lowest number in the range, stop is the highest and step is an optional input. It allows you to define ranges with a chosen step. If you do not include it, the function automatically sets it to 1. These 3 parameters are similar to what you have already used in the

range

function.

\# Example 1 # turn on a random pixel in each row import random as r # To use the random module, you have to import it into the beginning of your coding project. # When you use functions from the module, you have to indicate that the function you are calling belongs to the random module. # If you don't want to keep typing out random before all your functions, you can also import libraries as a shorter name so it is more efficient to use them, in this case you have to type: import \[name of module\] as \[shorter chosen name\] as you can see above. for i in range(0, 8): m\[i\]\[r.randrange(0, 7)\] = on # the third parameter is optional, in this case it’s automatically set to 1 # or for i in range(0, 8): m\[i\]\[r.randrange(0, 7, 1)\] = on

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F05e2f223-476a-45fb-a5e5-3f339cd93b37%2FIMG-0072.jpg?table=block&id=efa7890d-004e-4063-aac0-9bde98b18b90&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example 2 # turn on 10 random pixels in the matrix import random for i in range(0, 10): m\[random.randrange(0, 7)\]\[random.randrange(0, 7)\] # or for i in range(0, 10): m\[random.randrange(0, 7, 1)\]\[random.randrange(0, 7, 1)\]

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F513a5505-b6c6-4450-ac8a-58f49c6f0640%2FIMG_0109.jpg?table=block&id=a88ba543-43ba-4f90-86fd-4a48b96fad16&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example 3 # display a random number from 0 to 10 import random number = random.randrange(0, 10) # you can choose any range here since we will display it as a string # note: in the imagi app the maximum number of characters for scrolling text is 25 (but that would mean a pretty large number) scrolling\_text(str(number)) # or number = random.randrange(0, 10, 1) scrolling\_text(str(number))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/2987d95e-7a61-410e-b287-d4e4fdb9178a/RPReplay-Final1592411935.gif?table=block&id=fdfc2917-d53e-45bc-92d1-7ea5a85dc1d6&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=BPcnoWF01kkJad88QISg5EAUPN4j9W--OsacPVLCEIM)

\# Example 4 # display a random even number import random even\_number = random.randrange(0, 10, 2) scrolling\_text(str(even\_number))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/1f39145e-57ab-4fd9-9224-f3d912d6e95d/RPReplay-Final1593151155.gif?table=block&id=ca81224b-9d84-4a3a-aa1b-c1b3dd4d6d62&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=e5T3RMtso9As-iAb2rQsdV78MPemD8p7U4Y2eiHavOg)

\# Example 5 import random number = random.randrange(0, 100, 10) scrolling\_text(str(number))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/5074b62a-deca-459f-b261-91d2c7259eaf/RPReplay-Final1593151344.gif?table=block&id=9cfa1e5a-d3d0-476b-b461-afc4e846f0a5&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=H1lAUqvU7xBV0879SqJpUYYkOMVg5BbvEJLM9nhspzU)

random.randint(a, b)

returns a random integer N that falls between a and b (equal or greater than a and equal or less than b: a <= N <= b). Alias for randrange(a, b, 1).

\# Example 1 import random for i in range(0, 8): m\[i\] \[random.randint(0, 7)\]

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2237ac72-d5dc-41b2-8267-51318d8ba753%2FIMG-0073.jpg?table=block&id=d1f61c7e-dd10-417b-a148-41b2813c9f7a&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

\# Example 2 # set your background to a random color import random r = random.randint(0, 255) g = random.randint(0, 255) b = random.randint(0, 255) background((r, g, b))

Now, using the function

randint

you can code your own dice! 🎲 ![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F93e76cc1-0c27-4f6f-b2a3-cbfc20afc2ad%2FIMG-0091.jpg?table=block&id=2470ccb8-6f02-40d0-b3eb-87955a07bc15&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

Code

![](https://imagilabs.notion.site/image/https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Flmp526UhQN8yr0rKc6%2Fgiphy.gif?table=block&id=f415c844-02bb-43d6-b11c-96a35911ece8&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

💬 Remember: what you see next to the examples are random results. So don't worry if you don't receive exactly the same results if you run the same pieces of code, it's like rolling a dice! 🎲

#### Functions for sequences

Legendary 👩💻

random.choice(sequence)

returns a random element from a non-empty sequence. If the sequence is empty, raises [IndexError](https://docs.python.org/3/library/exceptions.html#IndexError).

\# Example 1 import random fruit = \['apple', 'pear', 'peach', 'banana', 'cherry', 'watermelon'\] scrolling\_text(random.choice(fruit))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/9a1efdc5-9a53-4743-9649-7c81b5238d7b/RPReplay-Final1592419745.gif?table=block&id=9e8b5733-9b2d-493c-ab48-f6e7503d4000&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=mvh2T4nxhUjJbUDu0oFHGYAwkv_wUBm5_-FX1ac0mkA)

\# Example 2 # set your background to a random color (from a given list of colors) import random colors = \[R, G, B, A, Y, O, M, P, W, K\] background(random.choice(colors))

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e9ed69b-a3df-4d6c-855f-25b13671fb87%2FIMG-0090.jpg?table=block&id=3b4371e6-e4e4-41a0-9d12-8b555c1606ad&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

random.shuffle(x, \[random\])

shuffles the sequence x in place. The second argument random is optional, it returns a number between 0.0 and 1.0; by default, this is the function [random()](https://docs.python.org/3/library/random.html#random.random). To shuffle an immutable sequence and return a new shuffled list, use

sample(x, k=len(x))

instead.

\# Example 1 import random letters = \['a', 'b', 'c'\] random.shuffle(letters) scrolling\_text(str(' '.join(letters))) #.join() joins strings. If you join a string with a list of characters/strings, it will join each element with the indicated character/string (here: ' ')

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/037549c8-6de7-46ca-a6e4-61f06ca79b52/RPReplay_Final1593261407.gif?table=block&id=9158e884-e7a6-44c8-9123-2c0e70481f17&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=PtrC7wkzL7RQRnIS4VKoVmnsyymOiPW7lumh7RT2pUA)

Well done! You arrived to the end of this chapter. 🥳 Now you know a lot about the

random

module. We'd like to challenge you and teach you how to write a fun game using what you just learned. In this game, you will learn two advanced programming concepts: how to write [function](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#7df2c51424e140b9a3abab33bdc3381f) s and a [single line for loop](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#3a95b08f67a64bd5b2ddd0d1796b2eed), as well! Good luck and have fun coding (and playing)! 😉✌️

🤖 Hacker

Code

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/90483234-a328-41c8-94b6-0ea02f72e1b6/RPReplay_Final1593262014.gif?table=block&id=6868a563-2627-4a31-807a-6468fc141642&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=26t7fUAhXP3vJzDFi2j8JgLEme_F_srYjvNXwODbWgc)

### datetime

This section documents the objects and functions in the

datetime

module. The

datetime

module supplies classes for manipulating dates and times.

To use the

datetime

[module](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#17bcda55941d460a9604d4fb3d8a0ec9), you have to import it in the beginning of your code project. When you use functions from the module, you have to indicate that the function you are calling belongs to the

datetime

module. If you don't want to keep typing out

datetime

before all your functions, you can also import libraries as a shorter name that follow the [naming rules](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#8e8140d6d669425a943b4bdd457d945f) for variables so it is more efficient to use them.

Available Types: date, time, datetime, timedelta, tzinfo, timezone

#### Constants

Legendary 👩💻

The [datetime](https://docs.python.org/3/library/datetime.html#module-datetime) module includes the following constants:

datetime.MINYEAR

The smallest year number allowed in a [date](https://docs.python.org/3/library/datetime.html#datetime.date) or [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) object. [MINYEAR](https://docs.python.org/3/library/datetime.html#datetime.MINYEAR) is

1

.

\# Example import datetime scrolling\_text(str(datetime.MINYEAR))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/12eee99c-2eb7-4adf-88bb-61d3ce780d79/RPReplay_Final1593606520.gif?table=block&id=16f93dd7-de79-4d67-858e-7fcf25e1b5fb&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=3JT2w0GD7SNFg8WiNBCHvIsZV1aggSMRIjap1k3bMSA)

datetime.MAXYEAR

The largest year number allowed in a [date](https://docs.python.org/3/library/datetime.html#datetime.date) or [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) object. [MAXYEAR](https://docs.python.org/3/library/datetime.html#datetime.MAXYEAR) is

9999

.

\# Example import datetime scrolling\_text(str(datetime.MAXYEAR))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/d39d8d61-f64d-45d5-9fe2-9ae04c55ea68/RPReplay_Final1593606649.gif?table=block&id=bfae201b-4112-4d1d-b000-7b7cd68b34d0&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=MZNRd4F1ZehICNYG8VZdC_njiL7LE8pi-ChvmKOx9tk)

#### date Objects

Legendary 👩💻

datetime.date(year, month, day)

Attributes: [year](https://docs.python.org/3/library/datetime.html#datetime.date.year), [month](https://docs.python.org/3/library/datetime.html#datetime.date.month), and [day](https://docs.python.org/3/library/datetime.html#datetime.date.day).

\# Example import datetime scrolling\_text(str(datetime.date(2018, 7, 9)))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/9d254dce-48b7-4c8b-ad33-75b1b7132668/RPReplay_Final1593607219.gif?table=block&id=0d12b123-8490-4cd3-83ea-7a8b85b90e34&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=CzdSeig9jF6E3pU8VgjrC98ckeAzzenTAOyJm0sGm1g)

#### time Objects

Legendary 👩💻

datetime.time(hour, minute, second, microsecond, tzinfo)

Independent of any particular day, assuming that every day has exactly 24\*60\*60 seconds. (There is no notion of “leap seconds” here.) Attributes: [hour](https://docs.python.org/3/library/datetime.html#datetime.time.hour), [minute](https://docs.python.org/3/library/datetime.html#datetime.time.minute), [second](https://docs.python.org/3/library/datetime.html#datetime.time.second), [microsecond](https://docs.python.org/3/library/datetime.html#datetime.time.microsecond), and [tzinfo](https://docs.python.org/3/library/datetime.html#datetime.time.tzinfo).

\# Example import datetime scrolling\_text(str(datetime.time(14, 10, 15, 384, None)))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/575c8386-fd9e-4111-9e4d-211c36d67351/RPReplay_Final1593607786.gif?table=block&id=d3e8b062-c941-49ec-8fd0-a489d2d28519&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=jMJrnIpRtOqmHKjk0k1rQGjOekp8VcFkOIrTBI4tMgE)

time.min

is the earliest representable [time](https://docs.python.org/3/library/datetime.html#datetime.time),

time(0, 0, 0, 0)

.

time.max

is the latest representable [time](https://docs.python.org/3/library/datetime.html#datetime.time),

time(23, 59, 59, 999999)

Instance attributes (read-only):

time.hour

in

range(24)

.

time.minute

in

range(60)

.

time.second

in

range(60)

.

time.microsecond

in

range(1000000)

.

time.fromisoformat(time\_string)

returns a [time](https://docs.python.org/3/library/datetime.html#datetime.time) corresponding to a time\_string in one of the formats emitted by [time.isoformat()](https://docs.python.org/3/library/datetime.html#datetime.time.isoformat). Specifically, this function supports strings in the format:

HH\[:MM\[:SS\[.fff\[fff\]\]\]\]\[+HH:MM\[:SS\[.ffffff\]\]\]

time.isoformat(timespec='auto')

returns a string representing the time in ISO 8601 format, one of:

HH:MM:SS.ffffff

, if [microsecond](https://docs.python.org/3/library/datetime.html#datetime.time.microsecond) is not 0.

HH:MM:SS

, if [microsecond](https://docs.python.org/3/library/datetime.html#datetime.time.microsecond) is 0.

HH:MM:SS.ffffff+HH:MM\[:SS\[.ffffff\]\]

, if [utcoffset()](https://docs.python.org/3/library/datetime.html#datetime.time.utcoffset) does not return

None

.

HH:MM:SS+HH:MM\[:SS\[.ffffff\]\]

, if [microsecond](https://docs.python.org/3/library/datetime.html#datetime.time.microsecond) is 0 and [utcoffset()](https://docs.python.org/3/library/datetime.html#datetime.time.utcoffset) does not return

None

.

The optional argument timespec specifies the number of additional components of the time to include (the default is

'auto'

). It can be one of the following:

'auto'

: Same as

'seconds'

if [microsecond](https://docs.python.org/3/library/datetime.html#datetime.time.microsecond) is 0, same as

'microseconds'

otherwise.

'hours'

: Include the [hour](https://docs.python.org/3/library/datetime.html#datetime.time.hour) in the two-digit

HH

format.

'minutes'

: Include [hour](https://docs.python.org/3/library/datetime.html#datetime.time.hour) and [minute](https://docs.python.org/3/library/datetime.html#datetime.time.minute) in

HH:MM

format.

'milliseconds'

: Include full time, but truncate fractional second part to milliseconds.

HH:MM:SS.sss

format.

'microseconds'

: Include full time in

HH:MM:SS.ffffff

format.

Note: Excluded time components are truncated, not rounded.

#### datetime Objects

datetime.datetime(year, month, day, hour, minute, second, microsecond, tzinfo)

\# Example import datetime scrolling\_text(str(datetime.datetime(2018, 7, 9, 14, 10, 15)))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/b3c6d06d-3ed9-4106-8e12-736aa796c984/RPReplay_Final1593610923.gif?table=block&id=0b3ad943-0995-4aec-9492-8e555d9cd9d6&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=r8Uybsqappj6AmQTDksgs3b8D33cV3zNIxclXeSBSv0)

Congratulations! You arrived to the end of this module 😎 Now, we invite you to code a simple a countdown clock to find out how many days are left until an important event like your birthday or imagi's birthday! 🥳 We will also write a function (you can revise this part [here](https://www.notion.so/Documentation-6abe65e2127c455d942eea5820d19587#233139100b044ac482ae0a1658f86e3f)). Good luck! 😉

Code

### math

This section documents the objects and functions in the

math

[module](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#17bcda55941d460a9604d4fb3d8a0ec9).

math

is a [Python](https://www.notion.so/Encyclopaedia-2350da7d9a954fbf9af42a06cd961a36#5b7219647175452dbf33edac61b78988) module that provides access to mathematical functions however cannot be used with [complex numbers](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#2a2aaee96e93428085f9577e01d861fc).

To use the

math

[module](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#17bcda55941d460a9604d4fb3d8a0ec9), you have to import it into the beginning of your code project. When you use functions from the module, you have to indicate that the function you are calling belongs to the

math

module. If you don't want to keep typing out

math

before your functions, you can also import libraries as a shorter name that follow the [naming rules](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#8e8140d6d669425a943b4bdd457d945f) for variables so it is more efficient to use them.

#### Numbers

Legendary 👩💻

math.ceil(x)

This returns the ceiling of x, which is the smallest [integer](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#358d222deb394d128e3a70e9e37b2ccb) greater than or equal to x.

\# Example import math character(str(math.ceil(5.67))) # or import math as m character(str(m.ceil(5.67)))

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fadd01430-83b7-44ba-a981-d85c56eff74d%2FIMG_7381.jpg?table=block&id=91e4d4ab-a150-45e4-bdbf-5f20506bf248&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

Code

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/1475c674-97a9-42c1-a5f5-0d503aa52eea/cash.gif?table=block&id=35fa79ab-c125-4039-9f3c-2fc40c7f3ef6&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=yvKLCyhSZA3D0rZ_QLnremlm8JtPtLgZGezDwZIRY3c)

math.floor(x)

This returns the floor of x, which is the greatest [integer](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#358d222deb394d128e3a70e9e37b2ccb) less than or equal to x.

\# Example import math character(str(math.floor(5.67)))

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F820ffc28-423a-4fda-b612-440c64370ac2%2FIMG_7382.jpg?table=block&id=d46b130b-3858-46f3-bf52-8786aaabe0d2&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

math.factorial(x)

This returns the [factorial](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#b88c153706eb4933a561bd2f8e6f27ce) of x, which has to be positive.

import math scrolling\_text(str(math.factorial(4)), A)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/cb535c6e-e40d-4c5c-be9d-c32b2286311e/math.24.gif?table=block&id=fd1ff821-e417-4c1f-b549-4d9ffa37e666&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=Lx3auaaAjMxlLE8BuetFuCI5nnTWe7ZmEvjYlGK6DiA)

math.gcd(a,b)

This returns the greatest common divisor of a and b.

import math scrolling\_text(str(math.gcd(24,56)))

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/46e613e1-2a6b-4c5b-99ec-df77af951ec5/math.8.gif?table=block&id=963d0652-ee38-4223-b1c3-45c0efa0c044&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=DBjDoBW4lcc1c_IziIRjBETmC4zcQ_Sm8WuRBYwSrLU)

#### Power and logarithmic functions

Legendary 👩💻

math.pow(x,y)

This returns x raised to the power of y, 
$$
x^y
$$
. x has to be positive and y has to be an [integer](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#358d222deb394d128e3a70e9e37b2ccb) for it to work.

\# Example import math scrolling\_text(str(math.pow(3,2)), Y)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/f9ce766c-ba76-44f6-85a1-0c5f77b19008/math.9.gif?table=block&id=673184e8-480b-42c8-b5c6-3d31d739d4fd&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=1jxHd9KCg5ItBlcuUj9REmMmyPomt9JuOrXL_K1Gyc0)

math.sqrt(x)

This returns the square root of x as a [floating point number](https://www.notion.so/Glossary-2350da7d9a954fbf9af42a06cd961a36#034e08812a894f1d8f1ca9d516ce11be), which has to be positive.

\# Example with perfect square number import math scrolling\_text(str(math.sqrt(25)), P)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/6e104a8e-4441-4743-a0f1-47533872f5f9/matg.sqrt25.gif?table=block&id=7129f09d-72fc-43b7-8d1e-0b51cf94ea02&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=HLfz5k2Et-ChgVz1SjMQkzZ8z3CFPhyOT8I7gPn56dg)

\# Example with not a square number import math scrolling\_text(str(math.sqrt(24)), P)

![](https://file.notion.so/f/f/42b7170c-c7c4-4e97-bf6a-2d600c17c8b8/bceb6618-7289-4e29-a889-571cb00872cb/math.sqrt24.gif?table=block&id=ffad3c8f-c8d0-4c1e-944f-98c403664148&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&expirationTimestamp=1781013600000&signature=x7ikCYP6DMHNDzk5jWX043KPMbJg3a5Krf2dE9PBAr4)

Code

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3222a11e-06e9-432f-855b-992f75df3c9b%2FIMG_7527.jpg?table=block&id=1fbf9261-4ded-4992-b01f-7fdccfdf9f25&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

When n = 25

![](https://imagilabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1b42d773-6494-40de-909c-e25b31e5222f%2FIMG_7526.jpg?table=block&id=cdbe3879-cee1-4d44-b74f-58bbef8ad3ad&spaceId=42b7170c-c7c4-4e97-bf6a-2d600c17c8b8&width=310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

When n = 24