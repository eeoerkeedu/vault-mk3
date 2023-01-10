<Wrap>
	<VStack
		alignItems="left"
		maxW="400px"
		minW="250px"
		justify="space-around"
		minH="350px"
	>
		<FrameHexagon inverted hover>
			<HStack>
				<Heading
					color={vaultYellow}
					size="sm"
					fontFamily={Orbitron}
					fontWeight="bold"
				>
					MERC NAME:
				</Heading>
				<Heading size="sm" fontFamily={Orbitron} fontWeight="bold">
					{/* {charToPrint.charName} */}
				</Heading>
			</HStack>
		</FrameHexagon>
		<FrameHexagon inverted hover>
			<HStack>
				<Text color={vaultYellow} fontFamily={Orbitron} fontWeight="semibold">
					SPECIES:
				</Text>
				<Text fontFamily={Orbitron} fontWeight="semibold">
					{/* {charToPrint.charSpecies} */}
				</Text>
			</HStack>
			<HStack>
				<Text color={vaultYellow} fontFamily={Orbitron} fontWeight="semibold">
					STYLE:
				</Text>
				<Text fontWeight="semibold" fontFamily={Orbitron}>
					{/* {charToPrint.charStyle} */}
				</Text>
			</HStack>
			<HStack>
				<Text color={vaultYellow} fontFamily={Orbitron} fontWeight="semibold">
					CLASS 1:
				</Text>
				<Text fontWeight="semibold" fontFamily={Orbitron}>
					{/* {charToPrint.charClass1} */}
				</Text>
			</HStack>
			<HStack>
				<Text color={vaultYellow} fontFamily={Orbitron} fontWeight="semibold">
					CLASS 2:
				</Text>
				<Text fontWeight="semibold" fontFamily={Orbitron}>
					{/* {charToPrint.charClass2} */}
				</Text>
			</HStack>
		</FrameHexagon>
	</VStack>
</Wrap>;
