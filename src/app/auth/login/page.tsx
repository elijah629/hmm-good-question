"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeMinimal } from "@supabase/auth-ui-shared";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Signup() {
	const supabase = createClientComponentClient<Database>();
	const router = useRouter();
	useEffect(() => {
		const {
			data: {
				subscription: { unsubscribe }
			}
		} = supabase.auth.onAuthStateChange(event => {
			if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
				router.push("/");
			}
		});
		return () => {
			unsubscribe();
		};
	}, [router, supabase.auth]);

	return (
		<>
			<div className="flex flex-1 items-center justify-center bg-neutral md:bg-transparent">
				<div className="card bg-neutral md:shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Login</h2>
						<Auth
							supabaseClient={supabase}
							view="sign_in"
							localization={{
								variables: {
									sign_in: {
										button_label: "Login"
									}
								}
							}}
							appearance={{
								theme: ThemeMinimal,
								extend: false,
								className: {
									input: "input w-full",
									button: "btn w-full btn-primary",
									label: "label",
									container: "flex flex-col gap-4",
									message: "text-error"
								}
							}}
							theme="dark"
							showLinks={false}
							providers={[]}
							redirectTo={`${location.origin}/auth/callback`}
						/>
						<Link
							className="link"
							href="/auth/signup">
							Don&apos;t have an account? Signup.
						</Link>
						<Link
							className="link"
							href="/auth/forgot-password">
							Forgot password?
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
