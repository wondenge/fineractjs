

import ApiClient from '../ApiClient';
import PutReportResponseChanges from './PutReportResponseChanges';

/**
 * The PutReportResponse model module.
 * @module model/PutReportResponse
 * @version 1.0
 */
class PutReportResponse {
    /**
     * Constructs a new <code>PutReportResponse</code>.
     * PutReportResponse
     * @alias module:model/PutReportResponse
     */
    constructor() { 
        
        PutReportResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutReportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutReportResponse} obj Optional instance to populate.
     * @return {module:model/PutReportResponse} The populated <code>PutReportResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutReportResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutReportResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutReportResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutReportResponseChanges} changes
 */
PutReportResponse.prototype['changes'] = undefined;






export default PutReportResponse;

