

import ApiClient from '../ApiClient';
import ResultsetColumnHeaderData from './ResultsetColumnHeaderData';

/**
 * The GetSurveyResponseDatatableData model module.
 * @module model/GetSurveyResponseDatatableData
 * @version 1.0
 */
class GetSurveyResponseDatatableData {
    /**
     * Constructs a new <code>GetSurveyResponseDatatableData</code>.
     * @alias module:model/GetSurveyResponseDatatableData
     */
    constructor() { 
        
        GetSurveyResponseDatatableData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSurveyResponseDatatableData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSurveyResponseDatatableData} obj Optional instance to populate.
     * @return {module:model/GetSurveyResponseDatatableData} The populated <code>GetSurveyResponseDatatableData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSurveyResponseDatatableData();

            if (data.hasOwnProperty('applicationTableName')) {
                obj['applicationTableName'] = ApiClient.convertToType(data['applicationTableName'], 'String');
            }
            if (data.hasOwnProperty('registeredTableName')) {
                obj['registeredTableName'] = ApiClient.convertToType(data['registeredTableName'], 'String');
            }
            if (data.hasOwnProperty('columnHeaderData')) {
                obj['columnHeaderData'] = ApiClient.convertToType(data['columnHeaderData'], [ResultsetColumnHeaderData]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} applicationTableName
 */
GetSurveyResponseDatatableData.prototype['applicationTableName'] = undefined;

/**
 * @member {String} registeredTableName
 */
GetSurveyResponseDatatableData.prototype['registeredTableName'] = undefined;

/**
 * @member {Array.<module:model/ResultsetColumnHeaderData>} columnHeaderData
 */
GetSurveyResponseDatatableData.prototype['columnHeaderData'] = undefined;






export default GetSurveyResponseDatatableData;

