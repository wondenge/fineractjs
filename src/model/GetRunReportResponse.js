

import ApiClient from '../ApiClient';
import GetPocketData from './GetPocketData';
import GetRunReportColumnHeaders from './GetRunReportColumnHeaders';

/**
 * The GetRunReportResponse model module.
 * @module model/GetRunReportResponse
 * @version 1.0
 */
class GetRunReportResponse {
    /**
     * Constructs a new <code>GetRunReportResponse</code>.
     * GetRunReportResponse
     * @alias module:model/GetRunReportResponse
     */
    constructor() { 
        
        GetRunReportResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRunReportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRunReportResponse} obj Optional instance to populate.
     * @return {module:model/GetRunReportResponse} The populated <code>GetRunReportResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRunReportResponse();

            if (data.hasOwnProperty('columnHeaders')) {
                obj['columnHeaders'] = ApiClient.convertToType(data['columnHeaders'], [GetRunReportColumnHeaders]);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [GetPocketData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetRunReportColumnHeaders>} columnHeaders
 */
GetRunReportResponse.prototype['columnHeaders'] = undefined;

/**
 * @member {Array.<module:model/GetPocketData>} data
 */
GetRunReportResponse.prototype['data'] = undefined;






export default GetRunReportResponse;

