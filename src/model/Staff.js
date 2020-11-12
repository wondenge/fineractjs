

import ApiClient from '../ApiClient';
import Image from './Image';

/**
 * The Staff model module.
 * @module model/Staff
 * @version 1.0
 */
class Staff {
    /**
     * Constructs a new <code>Staff</code>.
     * @alias module:model/Staff
     */
    constructor() { 
        
        Staff.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Staff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Staff} obj Optional instance to populate.
     * @return {module:model/Staff} The populated <code>Staff</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Staff();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('loanOfficer')) {
                obj['loanOfficer'] = ApiClient.convertToType(data['loanOfficer'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = Image.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('notLoanOfficer')) {
                obj['notLoanOfficer'] = ApiClient.convertToType(data['notLoanOfficer'], 'Boolean');
            }
            if (data.hasOwnProperty('notActive')) {
                obj['notActive'] = ApiClient.convertToType(data['notActive'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Staff.prototype['id'] = undefined;

/**
 * @member {Boolean} loanOfficer
 */
Staff.prototype['loanOfficer'] = undefined;

/**
 * @member {Boolean} active
 */
Staff.prototype['active'] = undefined;

/**
 * @member {module:model/Image} image
 */
Staff.prototype['image'] = undefined;

/**
 * @member {Boolean} notLoanOfficer
 */
Staff.prototype['notLoanOfficer'] = undefined;

/**
 * @member {Boolean} notActive
 */
Staff.prototype['notActive'] = undefined;

/**
 * @member {Boolean} new
 */
Staff.prototype['new'] = undefined;






export default Staff;

