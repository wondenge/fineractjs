

import ApiClient from '../ApiClient';

/**
 * The PutReportRequest model module.
 * @module model/PutReportRequest
 * @version 1.0
 */
class PutReportRequest {
    /**
     * Constructs a new <code>PutReportRequest</code>.
     * PutReportRequest
     * @alias module:model/PutReportRequest
     */
    constructor() { 
        
        PutReportRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutReportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutReportRequest} obj Optional instance to populate.
     * @return {module:model/PutReportRequest} The populated <code>PutReportRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutReportRequest();

            if (data.hasOwnProperty('reportName')) {
                obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
            }
            if (data.hasOwnProperty('reportParameters')) {
                obj['reportParameters'] = ApiClient.convertToType(data['reportParameters'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} reportName
 */
PutReportRequest.prototype['reportName'] = undefined;

/**
 * @member {Array.<Object>} reportParameters
 */
PutReportRequest.prototype['reportParameters'] = undefined;






export default PutReportRequest;

