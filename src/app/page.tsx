"use client"

import * as Dialog from '@radix-ui/react-dialog';
import styles from "./page.module.css"
import { useState } from "react";
import { Avatar, Button, Link, Table, Tabs, Theme } from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";


export default function Home() {

  type Game = {
    date: string;
    opponentGeneral: string;
    playerGeneral: string;
    result: "win" | "loss";
  };

  type Player = {
    name: string;
    avatar: string;
    favoriteGenerals: string[];
    experience: string;
    description: string;
    tournaments: string[];
    awards: string[];
    games: Game[];
  };
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const players: Player[] = [
    {
      name: "Hermiona",
      avatar: "https://avatars.dicebear.com/api/initials/Hermiona.svg",
      favoriteGenerals: ["Китайская пехота", "Американские ВВС"],
      experience: "5 лет",
      description: "Опытный игрок с глубоким пониманием стратегии.",
      tournaments: ["Весенний чемпионат 2023", "Зимний Кубок 2022"],
      awards: ["Лучший стратег 2023", "Мастер воздушных боёв 2022"],
      games: [
        {
          date: "2025-01-01",
          playerGeneral: "China Infantry",
          opponentGeneral: "USA Air Force",
          result: "win",
        },
        {
          date: "2025-01-02",
          playerGeneral: "USA Laser",
          opponentGeneral: "GLA Stealth",
          result: "loss",
        },
        {
          date: "2025-01-03",
          playerGeneral: "GLA Toxin",
          opponentGeneral: "China Nuke",
          result: "win",
        },
      ],
    },
    {
      name: "Rikudo <3",
      avatar: "https://avatars.dicebear.com/api/initials/Rikudo.svg",
      favoriteGenerals: ["ГЛА Скрытность", "Китайская Ядерная"],
      experience: "3 года",
      description: "Любит скрытные стратегии и точечные удары.",
      tournaments: ["Летний Турнир 2023", "Осенняя Лига 2022"],
      awards: ["Мастер скрытности 2023"],
      games: [
        {
          date: "2025-01-01",
          playerGeneral: "China Infantry",
          opponentGeneral: "USA Air Force",
          result: "win",
        },
        {
          date: "2025-01-02",
          playerGeneral: "USA Laser",
          opponentGeneral: "GLA Stealth",
          result: "loss",
        },
        {
          date: "2025-01-03",
          playerGeneral: "GLA Toxin",
          opponentGeneral: "China Nuke",
          result: "win",
        },
      ],
    },
  ];


  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
    <div className={styles.main}>
    <div className={styles.header}>
      
      <h1>
        Рейтинговая таблица клана <span className={styles.highlight}>CULT</span>
      </h1>
      <div className={styles.authButtons}>
        <Link href="/register">
          <Button variant="solid" className={styles.authButton}>
            Регистрация
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outline" className={styles.authButton}>
            Вход
          </Button>
        </Link>
      </div>
    </div>
      <Tabs.Root className={styles.tabs} defaultValue="info">
        <Tabs.List className={styles.tabList} aria-label="Clan information">
          <Tabs.Trigger value="info" className={styles.tabTrigger}>
            О клане
          </Tabs.Trigger>
          <Tabs.Trigger value="profiles" className={styles.tabTrigger}>
          Профили игроков
        </Tabs.Trigger>
          <Tabs.Trigger value="ratings" className={styles.tabTrigger}>
            Рейтинг игроков
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="profiles" className={styles.tabContent}>
  <h2 className={styles.sectionTitle}>Профили игроков</h2>
  <div className={styles.profileGrid}>
    {players.map((player, index) => (
      <div
        key={index}
        className={styles.profileCard}
        onClick={() => setSelectedPlayer(player)} // Открываем модальное окно
      >
        <div className={styles.avatarContainer}>
          <Avatar
            src={player.avatar}
            alt={player.name}
            className={styles.avatarImage}
            fallback={player.name[0]}
          />
        </div>
        <div className={styles.profileDetails}>
          <h3 className={styles.playerName}>{player.name}</h3>
          <p className={styles.playerDescription}>{player.description}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Модальное окно */}
          {selectedPlayer && (
            <Dialog.Root open={!!selectedPlayer} onOpenChange={() => setSelectedPlayer(null)}>
              <Dialog.Portal>
                <Dialog.Overlay className={styles.dialogOverlay} />
                <Dialog.Content className={`${styles.dialogContent} ${styles.expandedDialogContent}`}>
                  <Dialog.Title className={styles.dialogTitle}>
                    {selectedPlayer.name}
                  </Dialog.Title>

                  {/* Вкладки */}
                  <Tabs.Root defaultValue="info">
                    <Tabs.List className={styles.tabList}>
                      <Tabs.Trigger value="info" className={styles.tabTrigger}>
                        Личная информация
                      </Tabs.Trigger>
                      <Tabs.Trigger value="games" className={styles.tabTrigger}>
                        Игры
                      </Tabs.Trigger>
                    </Tabs.List>

                    {/* Вкладка: Личная информация */}
                    <Tabs.Content value="info" className={styles.tabContent}>
                      <div className={styles.infoContainer}>
                        <p  className={styles.tableCell}>
                          <strong>Описание:</strong> {selectedPlayer.description}
                        </p>
                        <p  className={styles.tableCell}>
                          <strong>Любимые генералы:</strong>{" "}
                          {selectedPlayer.favoriteGenerals.join(", ")}
                        </p>
                        <p  className={styles.tableCell}>
                          <strong>Опыт:</strong> {selectedPlayer.experience}
                        </p>
                        <p  className={styles.tableCell}>
                          <strong>Серия турниров:</strong>{" "}
                          {selectedPlayer.tournaments.join(", ")}
                        </p>
                        <p  className={styles.tableCell}>
                          <strong >Награды:</strong> {selectedPlayer.awards.join(", ")}
                        </p>
                      </div>
                    </Tabs.Content>

                    {/* Вкладка: Игры */}
                    <Tabs.Content value="games" className={styles.tabContent}>
            <h3>Игры</h3>
            <Table.Root className={styles.tableRoot}>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Дата</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Ваш генерал</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Генерал противника</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Результат</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Рейтинг</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {selectedPlayer.games.map((game, index) => {
                  const ratingChange = Math.floor(Math.random() * 11) + 10; // Изменение рейтинга от 10 до 20
                  const ratingDelta =
                    game.result === "win" ? `+${ratingChange}` : `-${ratingChange}`;
                  return (
                    <Table.Row
                      key={index}
                      className={game.result === "win" ? styles.winRow : styles.lossRow}
                    >
                      <Table.RowHeaderCell>{game.date}</Table.RowHeaderCell>
                      <Table.Cell className={styles.tableCell}>{game.playerGeneral}</Table.Cell>
                      <Table.Cell className={styles.tableCell}>{game.opponentGeneral}</Table.Cell>
                      <Table.Cell
                        className={game.result === "win" ? styles.winText : styles.lossText}
                      >
                        {game.result === "win" ? "Победа" : "Поражение"}
                      </Table.Cell>
                      <Table.Cell
                        className={game.result === "win" ? styles.winText : styles.lossText}
                      >
                        {ratingDelta}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Root>
          </Tabs.Content>
        </Tabs.Root>
        
        <Dialog.Close className={styles.dialogCloseButton}>Закрыть</Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)}
</Tabs.Content>
    


        <Tabs.Content value="info" className={styles.tabContent}>
          <h2>О клане CULT</h2>
          <p>
            Клан CULT был основан в 2020 году и быстро стал одним из самых известных кланов
            в игровом сообществе. Мы гордимся нашими талантливыми игроками, стратегическими
            достижениями и сплоченной командой. Наш девиз: "Единство в стратегии".
          </p>
          <p>
            Мы стремимся к совершенству и предоставляем нашим игрокам возможность развиваться
            и участвовать в самых сложных турнирах.
          </p>
        </Tabs.Content>

        <Tabs.Content value="ratings" className={styles.tabContent}>
          <div className={styles.containerLayout}>
          <h2 className={styles.sectionTitle}>Рейтинг игроков</h2>
  <Table.Root className={styles.tableRoot}>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell className={styles.tableHeaderCell}>
          Место
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className={styles.tableHeaderCell}>
          Игрок
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className={styles.tableHeaderCell}>
          Рейтинг
        </Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.RowHeaderCell className={styles.tableRowCell}>1</Table.RowHeaderCell>
        <Table.Cell className={styles.tableCell}>Rikudo &lt;3</Table.Cell>
        <Table.Cell className={`${styles.tableCell} ${styles.highlightText}`}>1800</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.RowHeaderCell className={styles.tableRowCell}>2</Table.RowHeaderCell>
        <Table.Cell className={styles.tableCell}>BEL</Table.Cell>
        <Table.Cell className={`${styles.tableCell} ${styles.highlightText}`}>1750</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.RowHeaderCell className={styles.tableRowCell}>3</Table.RowHeaderCell>
        <Table.Cell className={styles.tableCell}>Hermiona</Table.Cell>
        <Table.Cell className={`${styles.tableCell} ${styles.highlightText}`}>1650</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.RowHeaderCell className={styles.tableRowCell}>4</Table.RowHeaderCell>
        <Table.Cell className={styles.tableCell}>GeneralRUS</Table.Cell>
        <Table.Cell className={`${styles.tableCell} ${styles.highlightText}`}>1500</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.RowHeaderCell className={styles.tableRowCell}>5</Table.RowHeaderCell>
        <Table.Cell className={styles.tableCell}>Tapochek</Table.Cell>
        <Table.Cell className={`${styles.tableCell} ${styles.highlightText}`}>1400</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.RowHeaderCell className={styles.tableRowCell}>6</Table.RowHeaderCell>
        <Table.Cell className={styles.tableCell}>Sabina</Table.Cell>
        <Table.Cell className={`${styles.tableCell} ${styles.highlightText}`}>1300</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
          </div>
  
</Tabs.Content>
      </Tabs.Root>
    </div>
  </Theme>
    
  );
}