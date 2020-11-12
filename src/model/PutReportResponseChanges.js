

import ApiClient from '../ApiClient';

/**
 * The PutReportResponseChanges model module.
 * @module model/PutReportResponseChanges
 * @version 1.0
 */
class PutReportResponseChanges {
    /**
     * Constructs a new <code>PutReportResponseChanges</code>.
     * @alias module:model/PutReportResponseChanges
     */
    constructor() { 
        
        PutReportResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutReportResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutReportResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutReportResponseChanges} The populated <code>PutReportResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutReportResponseChanges();

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
PutReportResponseChanges.prototype['reportName'] = undefined;

/**
 * @member {Array.<Object>} reportParameters
 */
PutReportResponseChanges.prototype['reportParameters'] = undefined;






export default PutReportResponseChanges;

