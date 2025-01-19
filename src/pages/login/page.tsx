"use client";

import { TextField, Button, Heading, Box, Flex } from "@radix-ui/themes";
import styles from "../styles/Auth.module.css";
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";


export default function Login() {
    return (
      <div className={styles.authContainer}>
        <Box className={styles.authBox}>
          <Heading as="h2" size="4" className={styles.authHeading}>
            Вход в систему
          </Heading>
  
          <Flex direction="column" gap="3">
            <Box maxWidth="300px">
              <TextField.Root size="3" placeholder="Введите Email" />
            </Box>
            <Box maxWidth="300px">
              <TextField.Root size="3" placeholder="Введите пароль" type="password" />
            </Box>
            <Box>
              <Button className={styles.authButton} size="3" type="submit">
                Войти
              </Button>
            </Box>
          </Flex>
  
          <Flex justify="between" className={styles.authLinks}>
            <a href="/register" className={styles.authLink}>Нет аккаунта? Зарегистрируйтесь</a>
          </Flex>
        </Box>
      </div>
    );
  }