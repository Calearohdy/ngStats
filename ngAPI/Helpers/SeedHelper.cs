using System;
using System.Collections.Generic;

namespace ngAPI.Helpers
{
    public class SeedHelper
    {
        private static Random _rand = new Random();
        private static string GetRandom(IList<string> items)
        {
            return items[_rand.Next(items.Count)];
        }

        internal static string MakeCustomerName()
        {
            var prefix = GetRandom(randPrefix);
            var sufix = GetRandom(randSufix);
            return prefix + sufix;
        }

        internal static decimal GetTotalAmount()
        {
            return _rand.Next(100, 5000);
        }

        internal static string MakeCustomerEmail(string name)
        {
            return $"contact@{name.ToLower()}.com";
        }

        internal static string MakeCustomerState()
        {
            return GetRandom(usStates);
        }

        internal static DateTime GetPlaced()
        {
            var end = DateTime.Now;
            var start = end.AddDays(-90);

            TimeSpan possibleSpan = end - start;
            TimeSpan newSpan = new TimeSpan(0, _rand.Next(0, (int)possibleSpan.TotalMinutes), 0);

            return start + newSpan;
        }

        internal static DateTime? GetCompletedOrder(DateTime orderPlaced)
        {
            var now = DateTime.Now;
            var minLeadTime = TimeSpan.FromDays(7);
            var timePassed = now - orderPlaced;

            if (timePassed < minLeadTime)
            {
                return null;
            }

            return orderPlaced.AddDays(_rand.Next(7, 14));
        }

        private static readonly List<string> usStates = new List<string>()
        {
            "CA",
            "CO",
            "MI",
            "MO",
            "OH",
            "NJ",
            "PA"
        };

        private static readonly List<string> randPrefix = new List<string>()
        {
            "ABC",
            "XYZ",
            "BBC",
            "CNBC",
            "NBC",
            "FOX",
            "Main",
            "Enterprise",
            "The",
            "Ready",
            "Top"
        };

        private static readonly List<string> randSufix = new List<string>()
        {
            "ABC",
            "XYZ",
            "BBC",
            "CNBC",
            "NBC",
            "FOX",
            "Main",
            "Enterprise",
            "The",
            "A",
            "Ready",
            "Top"
        };

    }
}