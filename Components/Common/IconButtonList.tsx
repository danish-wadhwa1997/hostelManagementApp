import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import IconLabelSurface from './IconLabelSurface';
import {RFValue} from 'react-native-responsive-fontsize';
import {Title, IconButton, useTheme} from 'react-native-paper';
import MealInfoDialog from './MealInfoDialog';
type IconListType = {
  icon: string;
  label: string;
};

type Props = {
  list: Array<IconListType>;
  onChange: Function;
  selectedItem: IconListType | null;
};

const IconButtonList = ({list, onChange, selectedItem}: Props) => {
  const theme = useTheme();
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const hideInfoDialog = () => {
    setShowInfoDialog(false);
  };

  const handleInfoClick = () => {
    setShowInfoDialog(true);
  };
  if (list && list.length > 0) {
    return (
      <View style={styles.container}>
        <MealInfoDialog show={showInfoDialog} onClose={hideInfoDialog} />
        <View style={styles.titleContainer}>
          <Title>Meal Types</Title>
          <IconButton
            icon={'information'}
            size={RFValue(20)}
            iconColor={theme.colors.primary}
            onPress={handleInfoClick}
          />
        </View>
        <FlatList
          data={list}
          contentContainerStyle={styles.container}
          horizontal
          renderItem={({item}) => (
            <IconLabelSurface
              {...item}
              isSelected={selectedItem?.label === item.label ? true : false}
              onClick={onChange}
            />
          )}
          keyExtractor={item => item.label}
        />
      </View>
    );
  }
  return null;
};

export default IconButtonList;

const styles = StyleSheet.create({
  container: {
    columnGap: RFValue(8),
    paddingHorizontal: RFValue(8),
  },
  titleContainer: {
    flexDirection: 'row',
    columnGap: RFValue(8),
    alignItems: 'center',
  },
});
