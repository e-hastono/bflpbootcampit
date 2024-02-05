package chicken

func Chicken(isClucking bool, hour int) string {
	if isClucking {
		if hour == 24 || hour == 0 || (hour >= 1 && hour <= 3) {
			return "saya kesambet"
		}
	}

	return "saya tidur nyenyak"
}
