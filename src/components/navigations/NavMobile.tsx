import clsx from "clsx";
import styles from "./NavMobile.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NavigationItems } from "@/data";
import Link from "next/link";
import { Button, Text } from "@primer/react-brand";
import { ChevronDownIcon } from "@primer/styled-octicons";

export const NavMobile = () => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	const handleExpanded = () => {
		setIsExpanded(!isExpanded);
	};

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setHasScrolled(true);
		} else {
			setHasScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<nav
			className={clsx(
				styles["NavMobile"],
				hasScrolled && styles["NavMobile--hasScrolled"],
				isExpanded && styles["NavMobile--isOpen"]
			)}
		>
			<div className={clsx(styles["NavMobile__backdrop"])} aria-hidden />
			<div className={clsx(styles["NavMobile__container"])}>
				<div
					className={clsx(styles["NavMobile__preScrollContent"])}
					role="menubar"
				>
					<div>
						<div className={clsx(styles["NavMobile__preScrollContent-logo"])}>
							<Image
								src="/favicon.ico"
								alt="wahidrizka-mark"
								width={36}
								height={36}
							/>
						</div>

						<ul className={clsx(styles["NavMobile__preScrollContent-menu"])}>
							{NavigationItems.map((item, itemIndex) => (
								<li key={itemIndex} data-hidden={item.hidden}>
									<Link href={item.url}>
										<Text as="span" weight="medium">
											{item.title}
										</Text>
									</Link>
								</li>
							))}
							<li>
								<button
									aria-expanded={isExpanded}
									aria-haspopup="menu"
									onClick={handleExpanded}
								>
									<Text as="span" weight="medium">
										More
									</Text>
									<ChevronDownIcon />
								</button>
							</li>
						</ul>
					</div>
				</div>

				<div
					className={clsx(styles["NavMobile__postScrollContent"])}
					role="menubar"
					inert={true}
				>
					<div>
						<div
							className={clsx(styles["NavMobile__postScrollContent-header"])}
						>
							<button
								className={clsx(
									styles["NavMobile__postScrollContent-headerLabel"]
								)}
								aria-expanded={isExpanded}
								aria-haspopup="menu"
								onClick={handleExpanded}
							>
								<Text as="span" weight="medium">
									Menu
								</Text>
								<ChevronDownIcon />
							</button>
							<div>
								<Button
									variant="primary"
									as="a"
									href="/contact"
									size="small"
									hasArrow={false}
								>
									Contact
								</Button>
							</div>
						</div>
					</div>
				</div>

				<div className={clsx(styles["NavMobile__postScrollContent-content"])}>
					<div className={clsx(styles["NavMobile__menuWrapper"])}>
						<div
							className={clsx(styles["NavMobile__menu"])}
							aria-orientation="vertical"
							role="menu"
						>
							<div role="list">
								<div className={clsx(styles["NavMobile__menu-sectionLabel"])}>
									<Text as="span" size="300" weight="medium">
										Explore more
									</Text>
								</div>
								<div>
									<ul>
										{NavigationItems.map((item, itemIndex) => (
											<li
												key={itemIndex}
												className={clsx(styles["NavMobile__menu-item"])}
											>
												<Link href={item.url}>
													<Text as="span" weight="medium">
														{item.title}
													</Text>
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
							{/* <div role="list"></div> */}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
