import { cookies } from "next/headers";

const serverBaseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const getHeaders = () => {
  const token = cookies().get("bearer-token")?.value;

  return new Headers({
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  });
};

const _fetch = async <T>(
  url: string,
  method: string,
  options?: RequestInit,
  returnFullResponse: boolean = false
): Promise<{ data: T | null; error: string | null }> => {
  const headers = getHeaders();

  try {
    const response = await fetch(`${serverBaseUrl}${url}`, {
      method,
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData?.message || errorData;
    }

    const responseData = await response.json();

    if (returnFullResponse) {
      return { data: responseData, error: null };
    }

    return { data: responseData.data, error: null };
  } catch (error) {
    return {
      error:
        (error as { message: string })?.message ||
        (error as { detail: string })?.detail ||
        "Unknown error occurred",
      data: null,
    };
  }
};

export const fetchFunc = {
  get: async <T>(
    url: string,
    options?: RequestInit
  ): Promise<{ data: T | null; error: string | null }> =>
    _fetch<T>(url, "GET", options),

  post: async <T>(
    url: string,
    body: BodyInit | null | undefined,
    options?: RequestInit,
    returnFullResponse: boolean = false
  ): Promise<{ data: T | null; error: string | null }> =>
    _fetch<T>(
      url,
      "POST",
      { ...options, body: JSON.stringify(body) },
      returnFullResponse
    ),

  delete: async <T>(
    url: string,
    options?: RequestInit
  ): Promise<{ data: T | null; error: string | null }> =>
    _fetch<T>(url, "DELETE", options, true),
};
