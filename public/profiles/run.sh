#!/bin/bash
for i in *.md
do
    name=`echo $i| cut -d'.' -f1`
    md2html $i > $name.html
done
