import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { JwtPayload } from 'jsonwebtoken';
import { LOGIN_USER, SET_USER, UPDATE_USER_TOKEN } from './types';

export const loginUserAction = createAsyncThunk<
    { token: string, payload: JwtPayload } | null,
    { eMail: string, password: string, siteId?: string }
>(LOGIN_USER, async ({ eMail, password, siteId }) => {
    const credentials = btoa(`${eMail}:${password}`);

    const res = await fetch('/api/auth/token', {
        method: 'POST',
        credentials: 'include',
        headers: {
            authorization: `basic ${credentials}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ siteId: siteId ?? '77890-17410' }),
    });
    if (res.ok) {
        const token = await res.text();
        const payload = JSON.parse(atob(token.split('.')[1]));

        return {
            token,
            payload,
        };
    }
    return null;
});

export const setUser = createAction<{ firstName: string, lastName: string, personId: string, groups: number[], token: string} | null>(SET_USER);

export const updateUserToken = createAction<string>(UPDATE_USER_TOKEN);
