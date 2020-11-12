

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsStatus model module.
 * @module model/GetSelfSavingsStatus
 * @version 1.0
 */
class GetSelfSavingsStatus {
    /**
     * Constructs a new <code>GetSelfSavingsStatus</code>.
     * @alias module:model/GetSelfSavingsStatus
     */
    constructor() { 
        
        GetSelfSavingsStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsStatus} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsStatus} The populated <code>GetSelfSavingsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('submittedAndPendingApproval')) {
                obj['submittedAndPendingApproval'] = ApiClient.convertToType(data['submittedAndPendingApproval'], 'Boolean');
            }
            if (data.hasOwnProperty('approved')) {
                obj['approved'] = ApiClient.convertToType(data['approved'], 'Boolean');
            }
            if (data.hasOwnProperty('rejected')) {
                obj['rejected'] = ApiClient.convertToType(data['rejected'], 'Boolean');
            }
            if (data.hasOwnProperty('withdrawnByApplicant')) {
                obj['withdrawnByApplicant'] = ApiClient.convertToType(data['withdrawnByApplicant'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfSavingsStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfSavingsStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfSavingsStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} submittedAndPendingApproval
 */
GetSelfSavingsStatus.prototype['submittedAndPendingApproval'] = undefined;

/**
 * @member {Boolean} approved
 */
GetSelfSavingsStatus.prototype['approved'] = undefined;

/**
 * @member {Boolean} rejected
 */
GetSelfSavingsStatus.prototype['rejected'] = undefined;

/**
 * @member {Boolean} withdrawnByApplicant
 */
GetSelfSavingsStatus.prototype['withdrawnByApplicant'] = undefined;

/**
 * @member {Boolean} active
 */
GetSelfSavingsStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closed
 */
GetSelfSavingsStatus.prototype['closed'] = undefined;






export default GetSelfSavingsStatus;

