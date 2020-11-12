

import ApiClient from '../ApiClient';
import ResultsetColumnHeaderData from './ResultsetColumnHeaderData';
import ResultsetRowData from './ResultsetRowData';

/**
 * The GetReportNameResponse model module.
 * @module model/GetReportNameResponse
 * @version 1.0
 */
class GetReportNameResponse {
    /**
     * Constructs a new <code>GetReportNameResponse</code>.
     * GetReportNameResponse
     * @alias module:model/GetReportNameResponse
     */
    constructor() { 
        
        GetReportNameResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetReportNameResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReportNameResponse} obj Optional instance to populate.
     * @return {module:model/GetReportNameResponse} The populated <code>GetReportNameResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetReportNameResponse();

            if (data.hasOwnProperty('columnHeaders')) {
                obj['columnHeaders'] = ResultsetColumnHeaderData.constructFromObject(data['columnHeaders']);
            }
            if (data.hasOwnProperty('row')) {
                obj['row'] = ResultsetRowData.constructFromObject(data['row']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResultsetColumnHeaderData} columnHeaders
 */
GetReportNameResponse.prototype['columnHeaders'] = undefined;

/**
 * @member {module:model/ResultsetRowData} row
 */
GetReportNameResponse.prototype['row'] = undefined;






export default GetReportNameResponse;

